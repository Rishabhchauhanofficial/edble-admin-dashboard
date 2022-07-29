// eslint-disable-next-line
import React, {Component} from 'react';
import "./recipemanagement.scss";
import { useHistory } from 'react-router-dom';
import {Redirect,Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




class Nofound extends React.Component{

  

  

    render(){
     
      
      
        return(
            <div>
                        <div className="respo">
          <nav c0lassName="navbar navbar-default no-margin">
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
            <div className="container">
              <br /><br />
              <div className="row justify-content-center">
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Recipie Management</b></h1>
              
              </div>
              <div className="container">
              <div class="row">
              <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                
                <div class="col">
               <Link to="Createrecipie"> <button
                type="button"
                className="btn btn-danger"
                style={{ borderRadius: "25PX", fontSize: '15', marginLeft: '650px'  }}
              >
                Create Recipie
              </button></Link>
                  </div>
                  <div class="col">
                  Notification
                  </div>
                </div>
                </div>
              
            </div>
            
        <h1>Not Found</h1>
           
            
                      
          </div>
        </div>
 </div>
        )
    }
    }
    export default Nofound
