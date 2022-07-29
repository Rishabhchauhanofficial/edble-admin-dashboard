// eslint-disable-next-line
import React, {Component} from 'react';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';


class Supervendorlist extends React.Component{
  state = { data: [],branches: [],heading: 'loading....'};
  

  
  componentDidMount(){

    const heading= this.props.match.params.id;
    this.setState({heading: heading});
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

                console.alert(response.data.data.branches)
                

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
        slidesToScroll: 1,
        
      };
     
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
          <h1 style={{ marginLeft: 0, color: "red" }}>
            {" "}
            <b>{this.state.heading}</b>
          </h1>
        </div>
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="/assets/images/back_button.png" onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">
            

{/* maping start*/}
{ data.map((data, length) => { return( 




           
            
            <Accordion key={data.id} style={{borderRadius: "200px" }}>
            <Accordion.Toggle style={{border: "none", backgroundColor: "#0000" }}  eventKey={data.id}>
            <h2 class="accordion-header" id="headingOne"  >
      <button style={{ height: "60px", width: "1000px",margin: "10px" ,borderRadius: "50px",boxShadow: "0px 0px 15px -7px rgba(255,191,196,1)"}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span style={{fontSize: "25px", color: "black",textDecoration: "none"}}><b>{data.name}</b></span>
      </button>
    </h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={data.id}>
            <div className="row">
        <div className="col border border-white" style={{marginBottom: "20px", marginLeft: "30px"}}>
         
        <Slider {...settings}>


        

{/* maping start*/}
{ data.branches.map((branches, length) => { return(
        <div 
            className="col border border-white"
            style={{
              backgroundColor: "rgb(255, 219, 219)",
              borderRadius: 50,
              boxShadow: "3px 2px 10px rgb(219, 218, 218)",
              margin: "25px"
            }}
          ><Link to={"/Productsdisplay/"+branches.id} style={{textDecoration: 'none'}} >
            <div className="row">
              {" "}
              <img
                style={{ borderRadius: 30,marginTop: 5,width: "250px" }}
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
        </div>

)
}
}
 
 
export default Supervendorlist