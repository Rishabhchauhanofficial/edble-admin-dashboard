// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';



class Addcategories extends React.Component{

  constructor(props){
    super(props);
    this.state={
      img: "",
      catName: ""
    }
  }

 setFile = (e)=>{
   this.setState({img: e.target.files[0]})

  }

  handleSubmit = () =>{

    const formData = new FormData();
    formData.append('files',this.state.img);
    formData.append('name',this.state.catName);

    console.log(formData)
    
    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

    axios.post("http://3.14.168.174/category/addCategory", formData, config )
    .then(response => {
        
      if (response.data.code === 200) {
      
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          window.location.href = "/Addcategories";
         
  
                });
      } else {
        swal("Failed", response.data.message, "");
      }
        
    })  
   
    
 
  
  }
  
  getName = (e) =>{

    this.setState({catName: e.target.value})

  }
    render(){
     

        return(
            <div>
              <Sidebar/>
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
                
                  <h1 style={{ color: 'red'}}> <b>Product Management (Add Categories)</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                  
                </div>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row" style={{backgroundColor: '#444444', borderRadius: '25px', height: '250px', width: '1000px', marginLeft: '20px'}}>
                
              <div class="image-upload">
                    <label for="file-input">
                        <img style={{
marginLeft: '630px',
marginTop: '80px',}} src={uploadimg}/>
                    </label>
                    <label for="file-input">
                      <h1 style={{
color: 'rgb(255, 255, 255)',
marginLeft: '100px', marginTop: "50px"}} for="file-input">Upload Image</h1>
                    </label>
                    
                  
                    <input id="file-input" type="file" onChange={this.setFile}/>
                  </div>
              </div>
              <br />
            </div>
            <form>
              <div className="row">
                <div className="row" id="nm" style={{width: "1000px"}}>
                  <input type="text" placeholder="Name" onChange={this.getName} style= {{fontSize: "25px"}} />
                </div>
                
                
              </div>
              
              <button id="btnn" type="button" className="btn btn-danger" onClick={this.handleSubmit}>Save Detail</button>
            </form>
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
export default Addcategories;