// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'

class Addproduct extends React.Component{

  

  constructor(props){
    super(props);
    this.selectorRef = React.createRef(null);
    this.state = { 
      data: [],
      data2: [],
      users: [],
      subCat: [],
      catname: "---select category name---",
      subcatforapi: ''
    }
    this.handleitems = this.handleitems.bind(this);
  
  
  }




  
    
      
     // handleusers = event => {this.setState({ users: event.target.value })}


     //handle products when selected
      handleitems(e) {
        
        const { checked, value } = e.target;
        
        let { users } = this.state;
        if (checked) {
          users = [...users, {id: value}];
        } else {
          users = users.filter(el => el.id !== value);
        }
        this.setState({ users }, () => console.log(this.state));
      }


  
      handlecatforsub = (e)=>{

      
      
       const index = e.target.selectedIndex;
  const el = e.target.childNodes[index]
  const option =  el.getAttribute('id');
    this.setState({catname: option});


      this.setState({subCat : this.state.data2.find(sc => sc.name === e.target.value).subCategory});
      

      }


      

      
      handleSubmit = event => {

        const branchid= this.props.match.params.id;







        
        event.preventDefault();
    
        //  const id = {users: this.state.userid};
        //  const subject = {subject: this.state.fullname};
        //  const detail = {detail: this.state.usergroup};
  
    console.log(branchid)
    console.log(this.state.subcatforapi)
    console.log(this.state.catname)
    console.log(this.state.users)
    
    

    const sendingdata = {
    categoryId: this.state.catname,
    subCategoryId: this.state.subcatforapi,
    items: this.state.users
    

    }
    console.log(sendingdata)
        
      const token = localStorage.getItem('accessToken');
      const headers = { 
  
       'Content-Type': 'application/json',
        Authorization: `${token}`
       }

       //prev api    http://3.14.168.174/sendNotification
        axios.post('http://3.14.168.174/assignMultipleProductsByBranch/'+branchid,
           
            sendingdata
,{headers})
  
         
           
          .then(response => {
            if (response.data.code === 200) {
         
      
              // console.log(recipeid)
      
               swal("Success", response.data.message, "", {
                 buttons: false,
                 timer: 5000,
               })
               .then((value) => {
                window.location.href = "/Addproduct/"+branchid;
               
        
                      });
               
             } else {
               swal("Failed", response.data.message, "");
             }
  
            console.log(response);
            console.log(response.data);
          })
      }
    
   
    componentDidMount(){
  
     
      const token = localStorage.getItem('accessToken');
      const headers = { 
  
       'Content-Type': 'application/json',
        Authorization: `${token}`
       }
  
  
       
  
       const response = axios
              .get("http://3.14.168.174/item", {headers})
              .then((response) => {
                 
                  this.setState({ data: response.data.data});
                  //console.log(response.data.data)
              })
              .catch((error) => console.error(`Error:  ${error}`));
/// get categories & subcategories list api

             const resp= axios
              .get("http://3.14.168.174/category/getAllCategory",{headers})
              .then((resp) => {
                console.log(resp)
                
                this.setState({data2: resp.data.data});
                // console.log(response);
              
               
              })
              .catch(errors => {
                // react on errors.
                console.log(errors)
              })
  
  console.log(this.state.data2)
                    
    }
  
  
  
  
    
  
   
      render(){
      
      //  console.log(this.state.data2)
        const { data,data2,subCat } = this.state;
       
        
          return(
  
            
              <div>
  <>
    <div className="respo">
      <nav className="navbar navbar-default no-margin">
        <div className="navbar-header fixed-brand">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            id="menu-toggle"
          >
            <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
          </button>
          <a className="navbar-brand" href="#">
            <img src="assets/images/logo.png" alt style={{ width: 130 }} />
            </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <button
                className="navbar-toggle collapse in"
                data-toggle="collapse"
                id="menu-toggle-2"
              >
                {" "}
                <span
                  className="glyphicon glyphicon-th-large"
                  aria-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>
        {/* navbar-header*/}
        {/* bs-example-navbar-collapse-1 */}
      </nav>
    </div>
    <div id="wrapper">
      {/* Sidebar */}
      {/*****/ }
      {/* /#sidebar-wrapper */}
      {/* Page Content */}
      <div id="page-content-wrapper">
      <div class="container">
                <div class="row justify-content-center">
                  
                    <h1 style={{ color: 'red'}}> <b>Assign Products</b></h1>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                   
                  </div>
                </div>
              </div>
        <br />
        <br />
        
        <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="row">
          <div class="col">
          
          <div class="mb-3">
            
          
            <label style={{fontSize: "35px" , marginLeft: "15px"}} >Select Category </label>
            <select required 
            
            onChange={this.handlecatforsub}
            
            class="form-control" id={data2.id} aria-describedby="emailHelp" style={{height: "50px", borderRadius: "20px", fontSize: "25px"}}  aria-label="Default select example">
              
            { data2.map((data2, length) => { return( <option  key={length} value={data2.name} id={data2.id} ref={this.selectorRef} 
            
            
            
            >{data2.name}
           
            
            </option>   )})}
 
 
</select>


      
    
          </div>
          <div class="mb-3">
            
          
            <label style={{fontSize: "35px" , marginLeft: "15px"}} >Select sub Category</label>
            <select required name="this.state.subject"   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  
            
            onChange={this.handleSubcatfinal=(e)=>{

            this.setState({subcatforapi: e.target.value})
            

            }}

style={{height: "50px", borderRadius: "20px", fontSize: "25px"}}  aria-label="Default select example">
            
            <option>----select Sub Category---</option>{ subCat.map((data2, length) => { return( <option id={data2.id} value={data2.id}>{data2.name}
            
           
            
            </option>   )})}
 
 
</select>


      
    
          </div>
        
          
          <button type="submit" class="btn btn-primary" style={{backgroundColor: "red", width: "200px", height: "40px", marginLeft: "135px", borderRadius: "50px", border: "none"}}><span style={{fontSize: "20px"}}><b >Add Products</b></span></button>
        
        
        
                  </div>
           
            <div class="col">
              
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" style={{height: "450px", overflowY: "scroll" }} data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <table class="table" >
    
    <thead style={{backgroundColor: "pink"}}>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Image</th>
        <th scope="col">Select All</th>
        {/*<span><input type="checkbox"  style={{width : "20px"}} /></span>*/ }
        
      </tr>
    </thead>
    
    <tbody>
      {/* maping start*/}
  { data.map((data, length) => { 
    
  
    // Constant.ids = data.id
  
    return( 
      <tr>
        
        <td>{data.name}</td>
        <td><img src={data.image} style={{height: "45px" , width: "45px"}}/></td>
        <td><input type="checkbox"  value={data.id}
        name="this.state.id" onChange={this.handleitems}
        style={{width: "20px"}}></input></td>
      </tr>
      
   ) } ) }
  
   {/* maping end*/}
      
    </tbody>
    
  </table>

 {/* <BootstrapTable keyField='id' data={data2} columns={columns} /> */}
  </div>
  
  
            </div>
  
  
            </div>
            </form>
          </div>
        
      </div>
      {/* /#page-content-wrapper */}
    </div>
    {/* /#wrapper */}
    {/* jQuery */}
    {/*Container Main end*/}
  </>
  
 
  
  
              </div>
              
  )
  }
  }
export default Addproduct;