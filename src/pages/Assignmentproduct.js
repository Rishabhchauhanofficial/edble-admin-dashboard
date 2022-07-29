// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
class Assignmentproduct extends React.Component{

  constructor(props){
    super(props)
   
    this.state={
      show:false
    } 
   

    
  }
  handleModal()
  {
    this.setState({show:! this.state.show})
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
      
        return(
            <div>
                <div className="respo">
          <nav className="navbar navbar-default no-margin">
            <div className="navbar-header fixed-brand">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
                <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
              </button>
              <a className="navbar-brand" href="#"><img src="assets/images/logo.png" alt="" style={{width: '130px'}} /></a>
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
                
                  <h1 style={{ color: 'red'}}> <b>Product Assignment</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                
                </div>
              </div>
            </div>
            <br />
            <Modal  show={this.state.show} animation={false} >  
            <Modal.Header style={{}}><span style={{marginLeft: "270px"}}></span>
            
            </Modal.Header>
            <Modal.Body style={{fontSize: "25px"}} ><b>Are You Sure To Assign The Product</b></Modal.Body>
              <Modal.Footer style={{alignItems: "center"}}>
                <div class="row">
                <div class="col"><Button onClick={()=>{this.handleModal()}} style={{background: "red", width: "150px", height: "50px", fontSize: "25px"}}>No</Button></div>
                <div class="col"><Button onClick={()=>{this.handleModal()}} style={{background: "green",width: "150px", height: "50px", fontSize: "25px"}}>Yes</Button></div>
                </div>
              </Modal.Footer>
                </Modal>
            <div class="row">
              <hr/>
              
              <div class="col" style={{margin: "25px"}}>
              <div class="input-group mb-3" >
  <div class="input-group-prepend" >
    
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{backgroundColor: "#ff4c44", color: "white", height: "45px", borderRadius: "5px",width: "450px", fontSize: "25px"}}>
    <option  selected >Select Categories</option >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
        
                </div>
                <div class="col" style={{margin: "25px"}}>
                <div class="input-group mb-3" >
  <div class="input-group-prepend" >
    
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{backgroundColor: "#ff4c44", color: "white", height: "45px", borderRadius: "5px",width: "480px", fontSize: "25px"}}>
    <option  selected >Select Sub Categories</option >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
                  </div>
              </div>
              <div class="row">
              <hr/>
              <div class="col" style={{margin: "25px"}}>
              <div class="input-group mb-3" >
  <div class="input-group-prepend" >
    
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{backgroundColor: "#ff4c44", color: "white", height: "45px", borderRadius: "5px",width: "450px", fontSize: "25px"}}>
    <option  selected >Select Super Vendor</option >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
                </div>
                <div class="col" style={{margin: "25px"}}>
                <div class="input-group mb-3" >
  <div class="input-group-prepend" >
    
  </div>
  <select class="custom-select" id="inputGroupSelect01" style={{backgroundColor: "#ff4c44", color: "white", height: "45px", borderRadius: "5px",width: "480px", fontSize: "25px"}}>
    <option  selected >Select Branch Vendor</option >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
                  </div>
              </div>





              <div class="row">
                <div calss="col">
                <table class="table" >
  <thead style={{backgroundColor: "pink"}}>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      
      <th scope="col">Select</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">123#</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="checkbox" style={{width: "20px"}}></input></td>
    </tr>
    <tr>
      <th scope="row">2346#</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><input type="checkbox" style={{width: "20px"}}></input></td>
    </tr>
    <tr>
      <th scope="row">3646#</th>
      <td >cola</td>
      <td >Hero Honda</td>
      <td><input type="checkbox" style={{width: "20px"}}></input></td>
    </tr>
  </tbody>
</table>


                  </div>
                  <div class="col">
                    
                   <Link onClick={()=>{this.handleModal()}}><button style={{marginLeft: "450px", background: "red", color: "white", fontSize: "25px", borderRadius: "25px"}}>Assign Product</button> </Link>
            
          </div>
          </div>
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
export default Assignmentproduct;