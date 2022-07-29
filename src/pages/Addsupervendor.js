// eslint-disable-next-line
import React, {Component} from 'react';
import "./addsupervendor.scss";
import {Redirect} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import uploadimg from './Upload-Icon-PNG-Image.png';
import swal from 'sweetalert';





function Addsupervendor (){

  
  const [files, setFile] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 
  const [address, setAddress] = useState();
  const [mobileNumber, setMobilenumber] = useState();
  const [roleName] = useState('SUPER VENDOR');
  
  function addProduct(){

   
    //console.warn(name,email,password,address,mobileNumber,files,roleName)
    const formData = new FormData();
    formData.append('files',files);
    formData.append('name',name);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('address',address);
    formData.append('mobileNumber',mobileNumber);
    formData.append('roleName',roleName);
    //  fetch("http://3.14.168.174/add-supermarket", {

    //   method: 'POST',
    //   body: formData,
    //     Authorization: `${token}`
    // });
    // alert("data has been saved ")

    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

    axios.post("http://3.14.168.174/add-supermarket", formData, config )
    .then(response => {
        
      if (response.data.code === 200) {
      
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          window.location.href = "/Addsupervendor";
         
  
                });
      } else {
        swal("Failed", response.data.message, "");
      }
        
    })  
   
    
 }


     return(
            <div>

<body>
  
        <div class="respo" >
        <nav class="navbar navbar-default no-margin">
          
          <div class="navbar-header fixed-brand">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
              <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt="" id="a"/></a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <button class="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span></button>
              </li>
            </ul>
          </div>
          
          
        </nav>
    </div>
        <div id="wrapper">
          
          {/**/ }
          <div id="page-content-wrapper">
            <div class="container">
              <br/><br/>
              <div class="container">
                <div class="row">
                  <h1><b>Add Super Vendor</b></h1>
                  <div class="col"><img  style={{ width: '35px', marginTop: '-5px', marginLeft: '-5px',}} src="assets/images/back_button.png"  /></div>
                 
                </div>
              </div>
            </div>
            <br/>
            <div class="container">
                <div class="row" style={{
  backgroundColor: '#444444',
  borderRadius: '25px',
  height: '250px',
  width: '1000px',
  marginLeft: '20px',}}>
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
                    
                  
                    <input id="file-input" type="file"  onChange = {(e) => setFile(e.target.files[0])} />
                  </div>
                </div>
                <br/>
                

                    
              </div>
              <form >
                <div class="row">
                  <div class="col" id="nm">
                    <input type="text" placeholder="Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}
 onChange = {(e) => setName(e.target.value)}

 ></input>


                  </div>
                  <div class="col" id="nm" >
                    <input type="email" placeholder="Email Id" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}
 onChange = {(e) => setEmail(e.target.value)}
 ></input>

                  </div>
                </div>
                <div class="row">
                  <div class="col" id="nm">
                  <input type="password" placeholder="Password" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",
  color: "black"}}
  
  onChange = {(e) => setPassword(e.target.value)}></input>

                  </div>
                  <div class="col" id="nm">
                    <input type="Address" placeholder="Address" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}
 onChange = {(e) => setAddress(e.target.value)}></input>

                  </div>
                </div>
                <div class="row">
                  <div class="col" id="nm">
                    <input type="Mobile Number" placeholder="Mobile Number"style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} 
 onChange = {(e) => setMobilenumber(e.target.value)}></input>

                  </div>
                  <div class="col" id="nm">

                  </div>
                </div>
                <button id="btnn" onClick={addProduct} type="button" class="btn btn-danger">Save Detail</button>
              </form>
                
            </div>
            
          </div>
       
</body>
</div>
)
}

export default Addsupervendor