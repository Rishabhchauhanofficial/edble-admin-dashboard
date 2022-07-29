// eslint-disable-next-line
import React, {Component} from 'react';
import "./employeeditprofile.scss";
import {Redirect} from 'react-router-dom';
class Employeeditprofile extends React.Component{
  
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
          </nav>
        </div>
        <div id="wrapper">
          
          <div id="page-content-wrapper">
            <div className="container">
              <br /><br />
              <div className="row justify-content-center">
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Branch Vendor Management</b></h1>
              </div>
              <br /><br />
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="assets/images/back_button.png" /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <form>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px',}}>
                  <input type="text" style={{width: "300px", fontSize: "25px"}} placeholder="Name" />
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="email" style={{width: "300px", fontSize: "25px"}} placeholder="Email Id" />
                </div>
              </div>
              <div className="row">
              <div className="col" style={{marginLeft: '50px', marginBottom: '25px',}}>
                  <input type="text" style={{width: "300px", fontSize: "25px"}} placeholder="Password" />
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="number" style={{width: "300px", fontSize: "25px"}} placeholder="Mobile Number" />
                </div>
              </div>
              <br />
              <button style={{borderRadius: '25px', backgroundColor: 'red', marginLeft: '400px', marginTop: '10px', width: '250px', fontSize: '25px'}} type="button" className="btn btn-danger">Save Detail</button>
            </form>
          </div>
        </div>
</div>
)
}
}
export default Employeeditprofile