// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Createrecipie(){
  const history = useHistory();
 
  // handleChange(i, e) {
  //   let formValues = this.state.formValues;
  //   formValues[i][e.target.name] = e.target.value;
  //   this.setState({ formValues });
  // }

  // addFormFields() {
  //   this.setState(({
  //     formValues: [...this.state.formValues, { name: "", email: "" }]
  //   }))
  // }

  // removeFormFields(i) {
  //   let formValues = this.state.formValues;
  //   formValues.splice(i, 1);
  //   this.setState({ formValues });
  // }
  const { id } = useParams();
  

  const [files, setfiles] = useState();   
  const [name, setname] = useState();
  const [note, setnote] = useState();
  const [mealId] = useState(id);
 

  function addrecipie(){

    
    console.log(files,name,note,mealId)

    const formData = new FormData();

    formData.append('files',files);
    formData.append('name',name);
    formData.append('note',note); 
    formData.append('mealId',mealId);


 

    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

     

     axios.post("http://3.14.168.174/add-recipe", formData, config )
     .then(response => {
         
       if (response.data.code === 200) {
       
        const recipeid = response.data.data.id

        // console.log(recipeid)

         swal("Success", response.data.message, "", {
           buttons: false,
           timer: 2000,
         })
         .then((value) => {
           window.location.href = "/Ingridientsadd/"+recipeid;
          
   
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
              <a className="navbar-brand" href="#"><img src="//assets/images/logo.png" alt="" style={{width: '130px'}} /></a>
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
                
                  <h1 style={{ color: 'red'}}> <b>Recipie Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={()=> history.goBack()} /></div>
               
                </div>
              </div>
            </div>
            <br />
           
            <form>
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
      
    
      <input id="file-input" type="file"
      
      onChange = {(e) => setfiles(e.target.files[0])}
      />
    </div>
</div>
<br />
</div>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}
  
  onChange = {(e) => setname(e.target.value)}/>
                </div>
                {/* <div className="col" id="nm">
                  <input type="text" placeholder="Brand" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}
  
  />
                </div> */}
              </div>
              {/* <div className="row">
               
                <div className="col" id="nm">
                  <input type="text" placeholder="Total Quantity Available" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
              </div> */}
              <h1>Discription</h1>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" style={{fontSize: "25px", width:"1000px", marginLeft: "30px"}}
              onChange = {(e) => setnote(e.target.value)}
              
              ></textarea>
              <br/>
              <h1>Ingredients</h1>
{/*     
<div class="container">
    <div class="row">
    <form >
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index} style={{marginLeft: "500px"}} >
              <label style={{fontSize: "25px"}}>Ingredient Name : </label>
              <input type="text" name="Igname"  onChange={e => this.handleChange(index, e)} style={{fontSize:"25px"}} /><br/>
              <label style={{fontSize: "25px"}}>Ingridient Quantity :</label>
              <input type="text" name="Igquantity"  onChange={e => this.handleChange(index, e)} style={{fontSize:"25px"}} />
              
              <br/><br/><input type="file" style={{marginLeft: "35px"}}/>
              

              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{background: "yellow", color: "black", borderRadius: "25px", marginLeft: "50px"}}>Remove</button> 
                : null
              }
              <hr style={{marginLeft: "-350px"}}/>
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()} style={{background: "green", color: "white",height: "30px", width: "100px", borderRadius: "25px", marginLeft: "450px", fontSize: "15px"}}><b>Add +1</b></button>

          </div>
      </form>



    </div>
    </div> */}



              <button id="btnn" onClick={addrecipie} type="button" className="btn btn-danger">Save Detail</button>
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

export default Createrecipie;