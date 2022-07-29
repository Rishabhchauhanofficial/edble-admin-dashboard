import TabContent from 'react-bootstrap/TabContent'
// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
//import "slick-carousel/slick/slick.css";
import Tabs from 'react-bootstrap/Tabs';


// import Sonnet  from 'react-bootstrap/Sonnet';
import Tab from 'react-bootstrap/Tab';
//import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Productsdisplay extends React.Component{
  constructor(props) {
    super(props);
   
  }
  state = { data: [],data2: [],subCategory: [], tempsc: '' ,branchforadd: ''};


   handleGetMainCaegorie = (e)=>{
const branchid= this.props.match.params.id;

this.setState({branchforadd: branchid});
  const categoryid = e.currentTarget.id

this.setState({tempsc: categoryid})

//  console.log("clicked")
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }

     axios
  .get("http://3.14.168.174/getItemByCategoryAndSubCategoryOfBranch?branchId="+branchid+"&categoryId="+categoryid+"&subCategoryId=",{headers})
  .then( (response) => {
    console.log(response);
    this.setState({ data2: response.data.data});
   
  })
  .catch(errors => {
    // react on errors.
    console.log(errors)
  })
  
  }


  removeProd= (e)=> {

    console.log(e.currentTarget.id)
   
      const token = localStorage.getItem('accessToken');
      const headers = { 
  
       'Content-Type': 'application/json',
        Authorization: `${token}`
        
       }
  
       axios
  
    .delete("http://3.14.168.174/deleteItemFromBranch/"+e.currentTarget.id,{headers})
    .then( (response) => {
      console.log(response);
      if(response.data.status == 200){
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          window.location.href = "/Supervendorlist";
         
  
                });

      }
      else{
        swal("Failed", response.data.message, "");
      }
     
     
    })
    .catch(errors => {
      // react on errors.
      console.log(errors.status)
      if(errors.code == 500){
        swal("Delete Success", error, "", {
          buttons: false,
          timer: 2000,
        })
        

      }
    })

    
  }

  handleGetSubCaegorie = (e)=>{
    const branchid= this.props.match.params.id;

    const categoryidf = this.state.tempsc
    const categoryidsub = e.currentTarget.id;
    console.log(e.currentTarget.id)
      const token = localStorage.getItem('accessToken');
      const headers = { 
  
       'Content-Type': 'application/json',
        Authorization: `${token}`
        
       }
  
       axios
  
    .get("http://3.14.168.174/getItemByCategoryAndSubCategoryOfBranch?branchId="+branchid+"&categoryId="+categoryidf+"&subCategoryId="+categoryidsub,{headers})
    .then( (response) => {
      console.log(response);
      this.setState({ data2: response.data.data});
     
    })
    .catch(errors => {
      // react on errors.
      console.log(errors)
    })
  

    }
    getImgUrl (image) {
     
      const chec=null;
      if(image == chec){
        return 'https://teckhubsolutions.com/assets/img/Mobile_PNG/Screenshot%202022-06-24%20152504.jpg';
    
        $('img').att('src', image);
        console.log("default")
      }
      else{
       
        return image;
      }
      
    }
  
  componentDidMount(){
 
    const branchid= this.props.match.params.id;

    this.setState({branchforadd: branchid});
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }

     axios
  .get("http://3.14.168.174/category/getAllCategory",{headers})
  .then((response) => {
    
    this.setState({ data: response.data.data});
     console.log(response);
  
   
  })
  .catch(errors => {
    // react on errors.
    console.log(errors)
  })

 
 
   }
   
  
    render(){ 

      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

      const { data,data2,subCategory } = this.state;
      
     
     
        return(
            <div>
                <div className="respo">
          <nav className="navbar navbar-default no-margin">
            <div className="navbar-header fixed-brand">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
                <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
              </button>
              <a className="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="" style={{width: '130px'}} /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true" /></button>
                </li>
              </ul>
            </div>
            {/* navbar-header*/}
            {/* bs-example-navbar-collapse-1 */}
          </nav>
        </div>
        <div id="wrapper">
          {/* Sidebar */}
          

          
          {/* /#sidebar-wrapper */}
          {/* Page Content */}
          <div id="page-content-wrapper">
          <div class="container">
              <div class="row justify-content-center">
         
                  <h1 style={{ color: 'red'}}> <b>Product Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                  <div class="col"><Link to="/Addsubcategories"><button style={{backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Sub Category</button></Link></div>
                  <div class="col"><Link to="/Addcategories"><button style={{backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Category</button></Link></div>
                  <div class="col"><Link to={"/Addproduct/"+this.state.branchforadd}><button style={{ backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Assign Product</button></Link></div>
                  <div class="col"><Link to="/Addperticularproduct"><button style={{ backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Product</button></Link></div>
                  <div class="col" style={{marginLeft: '800px'}}>
                    
                  </div>
                </div>
              </div>
              <div className="container">
                <hr/>
              <h1 style={{fontSize: "35px", float: "left", marginTop: "40px"}}><b>Category</b></h1> </div>
              
              <div class="row">
             
           <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">  
            { data.map((data, length) => { 
  

 
  return( 
   
 <li class="nav-item" role="presentation" id={data.id}   onClick={this.handleGetMainCaegorie}> 
<button class="nav-link" id={"pills-home-tab"+data.id } data-bs-toggle="pill" data-bs-target={"#helo"+data.id} type="button" role="tab" aria-controls={"helo"+data.id} aria-selected="true"> <a   >   <div   className="col" >
              <p style={{textAlign: "center"}}><img src={this.getImgUrl(data.image)} style={{borderRadius: "50px", boxShadow: "0px 6px 29px 3px rgba(0,0,0,1)", marginLeft: "50px",marginRight: "50px",width: "50px", height: "50px", marginTop: "50px"}}/></p>
              <p style={{textAlign: "center" , fontSize: "15px"}}><b>{data.name}</b></p>
               </div>
                </a></button>
                  </li>

  ) } ) }
 

</ul>



<div class="tab-content" id="pills-tabContent">

{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 
<>  
  <div class="tab-pane " id={"helo"+data.id} role="tabpanel" aria-labelledby="pills-home-tab">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  { data.subCategory.map((subCategory, length) => { 
    

  // Constant.ids = data.id

  return( 

              
            <a id={subCategory.id} href={"#"+subCategory.name} onClick={this.handleGetSubCaegorie}>  <div  key={subCategory.id} className="col" >
              <p style={{textAlign: "center"}}><img src={this.getImgUrl(subCategory.image)} style={{borderRadius: "50px", boxShadow: "0px 6px 29px 3px rgba(0,0,0,1)", marginLeft: "50px",marginRight: "50px",width: "50px", height: "50px", marginTop: "50px"}}/></p>
              <p style={{textAlign: "center" , fontSize: "15px"}}><b>{subCategory.name} </b></p>
              </div>
              </a>
) } ) }



</ul>

  </div>
  </>
) } ) }

</div>


    
                  
                  </div>
                
              <div class="row">
                
              

              {/* { data[1].subCategory.map((subCategory, length) => { 
  

  // Constant.ids = data.id

  return( 

              
            <a href={"/Recipemanagementcat/"+subCategory.id}>  <div  key={subCategory.id} className="col" >
              <p style={{textAlign: "center"}}><img src={subCategory.image} style={{borderRadius: "50px", boxShadow: "0px 6px 29px 3px rgba(0,0,0,1)", marginLeft: "50px",marginRight: "50px",width: "50px", height: "50px", marginTop: "50px"}}/></p>
              <p style={{textAlign: "center" , fontSize: "15px"}}><b>{subCategory.name}</b></p>
              </div>
              </a>
) } ) } */}


                  
                  </div>
                  <hr/>
                  <div className="container">
                  
        <div className="row">
        { data2.map((subCategory, length) => { 
  

  // Constant.ids = data.id

  return( 

            
        <div key={data.id}
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          >
             
      <Link to="" style={{textDecoration: 'none'}} >
            <div className="row" >
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 , height: "120px", width: "230px"}}
                src={subCategory.image}
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>{subCategory.name}</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: {subCategory.price} Rs</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="/Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  |{subCategory.id} <Link id={subCategory.id} onClick={this.removeProd} style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>

) } ) }
          
        </div>
      </div>
      
            </div>
            
            <br />
            
            
          </div>
        </div>
        {/* /#page-content-wrapper */}
        {/* /#wrapper */}
        {/* jQuery */}
        {/*Container Main end*/}
   


</div>
)
}
}
export default Productsdisplay;