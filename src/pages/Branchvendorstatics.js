// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Accordion ,Card, Button} from 'react-bootstrap';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Branchvendorstatics extends React.Component{
  state = { data: [],branches: []};
  

  
  componentDidMount(){

    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
     const response = axios
            .get("http://3.14.168.174/get-supermarket", {headers})
            .then((response) => {
             // console.log(response.data.data[0].branches);
                this.setState({ data: response.data.data});
                this.setState({ branches: response.data.data.branches});
               
                

            })
            .catch((error) => console.error(`Error:  ${error}`));
            
  }
 
    render(){
      const { data } = this.state;
      const { branches } = this.state;
   
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

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
                
                  <h1 style={{ color: 'red'}}> <b>Sales Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "100px"}}><Link to="Overallstatics" style={{textDecoration: "none", color: "white" }} >Overall Statics</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "20px"}}><Link to="Supervendorstatics" style={{textDecoration: "none", color: "white" }}>Specific Super Vendor Statics</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'white', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "20px"}}><Link to="Branchvendorstatics" style={{textDecoration: "none", color: "red" }}>Specific Branch Vendor Statics</Link></b></div>
              
              
              <hr style={{marginTop: "20px"}}/>
              <hr/>
              <div className="container">
              <div className="container">
            

            {/* maping start*/}
            { data.map((data, length1) => { return( 
            
            
            
            
                       
                        
                        <Accordion key={data.id}  style={{borderRadius: "200px",}}>
                        <Accordion.Toggle style={{border: "none"}}  eventKey={data.id}>
                        <h2 class="accordion-header" id="headingOne"  >
                  <button style={{borderRadius: "5px", height: "60px", width: "1000px", }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span style={{fontSize: "25px", color: "black",textDecoration: "none"}}><b>{data.name}</b></span>
                  </button>
                </h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data.id}>
                        <div className="row">
                    <div className="col border border-white" style={{marginBottom: "20px"}}>
                     
                    <Slider {...settings}>
                    
            
            {/* maping start*/}
            { data.branches.map((branches, length) => { return(
                    <div 
                        className="col border border-white"
                        style={{
                          backgroundColor: "rgb(255, 219, 219)",
                          borderRadius: 10,
                          boxShadow: "3px 2px 10px rgb(219, 218, 218)",
                          margin: "25px"
                        }}
                      ><Link to={"BranchVendorstatsdata/"+branches.id} style={{textDecoration: 'none'}} >
                        <div className="row">
                          {" "}
                          <img
                            style={{ borderRadius: 20, marginTop: 5,width: "250px" }}
                            src={branches.imagePath}
                            alt
                          />
                        </div>
                        <p
                          className="h4"
                          style={{ marginTop: 20, marginLeft: 70, color: "rgb(0, 0, 0)" }}
                        >
                          <b>{branches.name}</b>
                        </p>
                        </Link>
                      </div>
                      ) } ) }
               
            
                     
                      
                      
                      </Slider>
                      
                      
            
                      
            
                      </div>
                    
                     
                    </div>
                        </Accordion.Collapse>
            
                        </Accordion>
             
              
              
            
              ) } ) }
              
            </div>
                          
      </div>
              
            </div>
              
              <br />
            </div>
            
          </div>
        </div>
        {/* /#page-content-wrapper */}
        {/* /#wrapper */}
        {/* jQuery */}
        {/*Container Main end*/}
   


</div>
)
}
}
export default Branchvendorstatics;