// eslint-disable-next-line
import React, { Component } from 'react';
import  { useState} from 'react';
import "./superadminlogin.scss";
import baground from './assets/css/Bg.png';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';


async function loginUser(credentials) {
  return fetch('http://3.14.168.174/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


function Superadminlogin(props) {
 
    
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
      role:
      {
          name:"ADMIN"
      }
    });
    if (response.code === 200) {
      
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/Superadmin";
       

              });
    } else {
      swal("Failed", response.message, "error");
    }
  }


    return ( <
        div >

        <body >
        <div class = "loginbg" > <img src= { baground }/> </div >
        <div class = "login-box" >
        
        <img src = "assets/images/logo.png"class = "avatar" />
        <div class="avatar">
       
        
        </div>
        <div class="row" style={{marginTop: "-30px" ,width: "800px", marginLeft: "-200px"}}>
        <div class="col"><a href="http://localhost:3000"><button class="btn" style={{height: "50px", width: "250px", backgroundColor: "green", color: "white", fontSize: "15px", borderRadius: "50px"}}>Super admin login</button></a></div>
        <div class="col"><a href="http://localhost:3001/"><button style={{height: "50px", width: "250px", border: "none",  backgroundColor: "orange", color: "white", fontSize: "15px", borderRadius: "50px"}}>Super Market login</button></a></div>
        <div class="col"><a href="http://localhost:3002/"><button style={{height: "50px", width: "250px", border: "none",  backgroundColor: "orange", color: "white", fontSize: "15px", borderRadius: "50px"}}>Branch Vendor login</button></a></div>
        </div><br/><br/>
        <form noValidate onSubmit={handleSubmit} >

    
        <input style = {
            { color: 'white', } }
        type = "text"
        name = "email"
        placeholder = "Email id"
        value={email}
        onChange={e => setUserName(e.target.value)}
      
        /> <br />< br />

        <input style = {
            { tectColor: 'white', } }
        type = "password"
        name = "password"
        placeholder = "Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
     
        /> 
        
        <br /> < br />
        <input type = "submit"
        name = "submit"
       
        />

        </form>


        </div>

        </body> </div>
    )
}

   
export default Superadminlogin