// eslint-disable-next-line
import React, {Component} from 'react';
import "./Supervendermanagementdetails.scss";
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Constant from './Constant';
import axios from 'axios';





class Supervendermanagementdetails extends React.Component{

 


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
                const idf = this.props.match.params.id;
                this.setState({ data: response.data.data[idf]});
                //console.log(response.data.data[idf])
            })
            .catch((error) => console.error(`Error:  ${error}`));
            
  }

    render(){

      const { data} = this.state;
      
        return(


<div>
           

<body>
  

        <div class="respo">
        <nav  class="navbar navbar-default no-margin">
          
          <div class="navbar-header fixed-brand">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
              <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="" style={{width: '130px'}}/></a>
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
          
          
          <div id="page-content-wrapper">
            <div class="container">
              <div class="row justify-content-center">
                
                  <h1 style={{ color: 'red'}}> <b>Super Vendor Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                  
                </div>
              </div>
            </div>
            <br/>

            < div class="container">

                <div class="row" >
                    <img style={{marginLeft: '10px',
                    borderRadius: '25px', height: '300px', width: '1000px', boxShadow: '3px 2px 10px rgb(219, 218, 218)'}} src={data.image} alt=""/>
                    
                    <h1 style={{
                    marginTop: '15px', marginLeft: '0px',
                    fontWeight: '60px'}}><span ><b>{data.name}</b></span></h1>
                    <p style={{ fontSize: '15px' , textAlign: 'center'}}><b>{data.address}</b></p>
                    
                </div>
                <div class="row">
                    <div class="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgb(167, 167, 167)', marginRight: '10px'}}><img src="/assets/images/back_button.png" style={{width: '50px'}} /> <span style={{color: '#747171'}}><b>Email ID:-</b></span> <b>{data.email}</b></div>
                    <div class="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgb(167, 167, 167)', marginRight: '10px'}}><img src="/assets/images/back_button.png" style={{width: '50px'}} /><span style={{color: '#747171'}}> <b>Password:-</b></span><b> ******** <a href="#"> <img src="https://teckhubsolutions.com/assets/img/android/eye.png" style={{width: '20px'}} /></a></b></div>
                    
                </div>
                <br/>
                <div class="row">
                    <div class="col" style={{
                    fontSize: '20px', boxShadow: '3px 2px 10px rgb(167, 167, 167)', marginRight: '10px',
                    width: '10px'}}><img src="/assets/images/back_button.png" style={{width: '50px'}} /> <span style={{color: '#747171'}}><b>Mobile Number:</b></span> <b>{data.mobileNumber}</b></div>
                     <div class="col"></div>
                  </div>
                <div class="row">
                    
                    <h2  style={{
                    marginLeft: '320px', height: '25px', marginTop: '20px', borderRadius: '25px', background: 'rgb(255,51,0)', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', width: '380px',
                  textAlign: 'center'}}><span><b>Total Branch Vendors Asociated : {data.totalBranchVendor}</b></span></h2>
                </div>
                    
              </div>
              
                
            </div>
            
          </div>
         
</body>

            </div>
)
}
}
export default Supervendermanagementdetails