// eslint-disable-next-line
import React, {Component} from 'react';
import "./addemployee.scss";
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Addemployee extends React.Component{


constructor(props){
  super(props);
  this.state={
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneno: ""
    
    
    
  }
}

// componentDidMount(){
// const id= this.props.match.params.id;
// axios.post('')


// }

phone=(e)=>{
this.setState({phoneno: e.target.value})
}
pass=(e)=>{
  this.setState({password: e.target.value})

}
email=(e)=>{
  this.setState({email: e.target.value})

}
firstname =(e)=>{
  this.setState({firstName: e.target.value})
  

}
lastname=(e)=>{
  this.setState({lastName: e.target.value})

}

 addemp=(e)=>{




 const id= this.props.match.params.id;
 const sendingdata={
  
    branchId: id,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    password: this.state.password,

    role:{
        name:"EMPLOYEE"
    
}


 }
 console.log(sendingdata)
 const token = localStorage.getItem('accessToken');
 const config = {  
 headers: {'content-type': 'application/json', Authorization: `${token}`},
  
   
  }
  
    axios.post('http://3.14.168.174/addEmpOrManInBranch',sendingdata,config)
 .then(response => {
  console.log(response)
        
  if (response.data.code === 200) {
  
    swal("Success", response.data.message, "", {
      buttons: false,
      timer: 2000,
    })
  
  } else {
    swal("Failed", response.data.message, "");
  }
    
}) 
.catch((err)=>{
  console.log(err)
})

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
              <a className="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="" style={{width: '130px'}} /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true" /></button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="wrapper">
          {/**/ }
          <div id="page-content-wrapper">
            <div className="container">
              <br /><br />
              <div className="row justify-content-center">
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Branch Vendor Management (Add Employee)</b></h1>
              </div>
              <br /><br />
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="/assets/images/back_button.png" onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <form>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="text" placeholder="First Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} onChange={this.firstname}/> 

                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="email" placeholder="Last Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} onChange={this.lastname}/>
                </div>
              </div>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px' , borderBottom: '5px' , borderColor: 'black'}}>
                  <input type="password" placeholder="Email Id" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",color: "black"}} onChange={this.email}/>
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="number" placeholder="Mobile Number" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} onChange={this.phone}/>
                </div>
              </div>
              <div class="row">
                <div class="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                <input type="number" placeholder="Password" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} onChange={this.pass}/>
                </div>
                <div class="col">
                  
                </div>
              </div>
              <br />
              <button style={{borderRadius: '25px', backgroundColor: 'red', marginLeft: '400px', marginTop: '10px', width: '250px', fontSize: '25px'}} type="button" className="btn btn-danger" onClick={this.addemp}>Save Detail</button>
            </form>
            

          </div>
        </div>

            </div>
                    )
                }
                }
                export default Addemployee
            