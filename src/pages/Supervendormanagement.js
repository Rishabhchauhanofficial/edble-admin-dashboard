// eslint-disable-next-line
import React, {Component} from 'react';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Constant from './Constant';



class Supervendormanagement extends React.Component{

  
  state = { data: []};

  
  componentDidMount(){

    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
     const response = axios
            .get("http://3.14.168.174/get-supermarket", {headers})
            .then((response) => {
               
                this.setState({ data: response.data.data});
            })
            .catch((error) => console.error(`Error:  ${error}`));
            
  }


    render(){
     
      const { data } = this.state;
     
          

      
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
      <div className="container">
        <div className="row justify-content-center">
          <h1 style={{ marginLeft: 0, color: "red" }}>
            {" "}
            <b>Super Vendor Management</b>
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col" style={{ marginLeft: 800 }}>
              <button
                type="button"
                className="btn btn-danger"
                style={{ borderRadius: "25PX", fontSize: 15 }}
              >
                <a href="Addsupervendor" style={{textDecoration: 'none', color: "white"}}>Add Super Vendor</a>
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
{/* maping start*/}
{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 

<div key={data.id}

            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 10,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "35px"
             
             

            }}
          >
            {/* { {Constant.ids = data.id} } */}
            
            <Link  
            to={"Supervendermanagementdetails/"+length} style={{textDecoration: 'none'}} >
            <div className="row" style={{width: '180px', marginLeft: '1px'}}>
              {" "}
              
              <img
                style={{ borderRadius: 10, marginTop: 5, height: '110px', }}
                src={data.image}
                alt
              />
            </div>
            <p
              className="h4"
              style={{ marginTop: 20, textAlign: "center", color: "rgb(0, 0, 0)",textDecoration: 'none'  }}
            >
              <b>{data.name}</b>
            </p>
            </Link>
          </div>
          

 ) } ) }

          {/* maping end*/}
          
          
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
export default Supervendormanagement