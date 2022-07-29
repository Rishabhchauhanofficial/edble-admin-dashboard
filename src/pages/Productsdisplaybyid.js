// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Productsdisplayid extends React.Component{

  state = { data: [],data2: [],subCategory: []};

   
  componentDidMount(){
    const id = this.props.match.params.id;

    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }

  
  const reqOne = axios.get("http://3.14.168.174/category/getAllCategory",{headers});
const reqTwo = axios.get("http://3.14.168.174/getItemByCategoryAndSubCategoryOfBranch?branchId=6&categoryId=15&subCategoryId=23",{headers});

axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]

  this.setState({ data: responseOne.data.data});
  console.log(responseOne.data.data)
  this.setState({subCategory: responseOne.data.data.subCategory})
 
  this.setState({ data2: responseTwo.data.data});
})).catch(errors => {
  // react on errors.
})
   }
  
    render(){ 


      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
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
                  <div class="col"><form class="d-flex" style={{marginLeft: "-25px"}}>
      <input class="form-control me-2" type="search" placeholder="  " aria-label="Search" style={{width: "200px", borderRadius: "25px" }}/>
      <button class="btn btn-outline-success" type="submit" style={{borderRadius: "25px", backgroundColor: "red", color: "white", fontSize: "15px"}}>Search</button>
    </form></div>
                  <div class="col"><Link to="Addsubcategories"><button style={{backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Sub Category</button></Link></div>
                  <div class="col"><Link to="Addcategories"><button style={{backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Category</button></Link></div>
                  <div class="col"><Link to="Addproduct"><button style={{ backgroundColor: "red", height: "35px", width: "200px", borderRadius: "25px", color: "white", fontSize: "15px"  }} >Add Product</button></Link></div>
                  <div class="col" style={{marginLeft: '800px'}}>
                    
                  </div>
                </div>
              </div>
              <div className="container">
                <hr/>
              <h1 style={{fontSize: "35px", float: "left", marginTop: "40px"}}><b>Category</b></h1> </div>
              <div class="row">
        



                  <Slider {...settings}>
              {/* maping start*/}
{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 
<>
              
            <a href={"/Productsdisplaybyid/"+data.id}>  <div  key={data2.id} className="col" >
              <p style={{textAlign: "center"}}><img src={data.image} style={{borderRadius: "50px", boxShadow: "0px 6px 29px 3px rgba(0,0,0,1)", marginLeft: "50px",marginRight: "50px",width: "50px", height: "50px", marginTop: "50px"}}/></p>
              <p style={{textAlign: "center" , fontSize: "15px"}}><b>{data.name}</b></p>
               </div>
              </a>
             


</>
) } ) }

</Slider>
                  
                  </div>
                
              <div class="row">
                
             




                  
                  </div>
                  <hr/>
                  <div className="container">
        <div className="row">
        <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct" style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="/assets/images/foodd.jpg"
                alt
              />
            </div>
            </Link>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Food Name</b>
            </p>
            <p
              className="h4"
              style={{ marginLeft: 30, color: "rgb(0, 0, 0)" }}
            >
              <b>Price: 150</b>
            </p>
            <div class="col" style={{marginTop: "20px", marginLeft: "25px", width: "130px",height: "20px", backgroundColor: "red", borderRadius: "50px" }}>
                   <h1 style={{fontSize: "15px", color: "white"}} ><Link to="Editproduct"  style={{textDecoration: "none", color: "white"}}>Edit</Link>  | <Link style={{textDecoration: "none", color: "white"}}> Remove</Link></h1>
            </div>

            
          </div>
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
export default Productsdisplayid;