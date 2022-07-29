// eslint-disable-next-line
import React, {Component} from 'react';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';



class Campbranchvendorlist extends React.Component{

 
 
    render(){
     
      
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
                
                  <h1 style={{ color: 'red'}}> <b>Campaign & Promotions</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                  <div class="col">
                    <h1 style={{marginLeft: '-60px', marginRight: '-100px', marginTop: '-2px'}}><b>Branch Vendor List</b></h1>
                  </div>
                  
                </div>
              </div>
            </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div 
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",margin: "35px"
            }}
          ><Link to="Createacampaign" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="assets/images/easyday.jpg"
                alt
              />
            </div>
            <p
              className="h4"
              style={{ marginTop: 20,  color: "rgb(0, 0, 0)",textDecoration: 'none' , textAlign: "center" }}
            >
              <b>Vishal Megamart 1</b>
            </p>
            </Link>
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="Createacampaign" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="assets/images/vsm.jpg"
                alt
              />
            </div>
            <p
              className="h4"
              style={{ marginTop: 20, color: "rgb(0, 0, 0)" , textAlign: "center"}}
            >
              <b>Vishal Megamart 1</b>
            </p>
            </Link>
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
            }}
          ><Link to="Createacampaign" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="assets/images/easyday.jpg"
                alt
              />
            </div>
            <p
              className="h4"
              style={{ marginTop: 20, color: "rgb(0, 0, 0)", textAlign: "center" }}
            >
              <b>Vishal Megamart 1</b>
            </p>
            </Link>
          </div>
          <div
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",margin: "35px"
            }}
          ><Link to="Createacampaign" style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 20, marginTop: 5 }}
                src="assets/images/vsm.jpg"
                alt
              />
            </div>
            <p
              className="h4"
              style={{ marginTop: 20, marginLeft: 20, color: "rgb(0, 0, 0)" }}
            >
              <b>Vishal Megamart 1</b>
            </p>
            </Link>
          </div>
        </div>
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
export default Campbranchvendorlist