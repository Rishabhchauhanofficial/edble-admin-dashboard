// eslint-disable-next-line
import React, {Component, useState} from 'react';
import "./addbranchvendor.scss";
import {InputGroup,DropdownButton,Dropdown,FormControl} from 'react-bootstrap';
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Addperticularproduct() {

  const [files, setfiles] = useState();   
  const [name, setname] = useState();
  const [quantity, setquantity] = useState();
  const [price,setprice] = useState();
  const [brand_name,setbrandname] = useState();
  const [barcode] = useState("");
  

  const history = useHistory();
  
  function addperpro(){

  

console.log(name,files,quantity,price,brand_name,barcode);

const formData = new FormData();

    formData.append('files',files);
    formData.append('name',name);
    formData.append('quantity',quantity);
    formData.append('price',price);
    formData.append('brand_name', brand_name);
    formData.append('barcode', barcode);

   
  


    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

     axios.post("http://3.14.168.174/add-item", formData, config )
     .then(response => {

         
      console.log(response)
       if (response.data.code === 200) {
       
       // const recipeid = response.data.data.id

        // console.log(recipeid)

         swal("Success", response.data.message, "", {
           buttons: false,
           timer: 2000,
         })
         .then((value) => {
           window.location.href = "/Addperticularproduct";
          
   
                 });
       } else {
         swal("Failed", response.data.message, "");
       }
         
     })  





  }


 
 
     

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
                
                  <h1 style={{ color: 'red'}}> <b>Product Management (Add Product)</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={()=> history.goBack()} /></div>
                  
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
                    
                  
                    <input id="file-input" type="file"  onChange = {(e) => setfiles(e.target.files[0])}/>
                  </div>
              </div>
              <br />
            </div>
            <form>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="Name" 
                   onChange = {(e) => setname(e.target.value)}
                  
                  style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
                <div className="col" id="nm">
                  <input type="text" placeholder="Brand" 
                   onChange = {(e) => setbrandname(e.target.value)}
                  style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
              </div>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="Price" 
                   onChange = {(e) => setprice(e.target.value)} style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
                <div className="col" id="nm">
                  <input type="text" placeholder="quantity" 
                   onChange = {(e) => setquantity(e.target.value)}
                  style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}/>
                </div>
                
              </div>
              
              
              <button id="btnn" type="button" className="btn btn-danger" onClick={addperpro}>Save Detail</button>
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

export default Addperticularproduct;