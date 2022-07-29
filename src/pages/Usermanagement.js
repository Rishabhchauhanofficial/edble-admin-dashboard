
import React, {Component} from 'react';
import "./recipemanagement.scss";
import { useHistory } from 'react-router-dom';
import {Redirect,Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Button,Modal} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


export default class Usermanagement extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            colorsd: "#FF0000",
            ad: "Deactivate",
            data: [],
            objde: {},
            useadr: [],
            userid: ""
        }
        
    }
    handleModal=()=>
    {
      this.setState({show:! this.state.show})

    
    }
    componentDidMount(){
        const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }

        axios.get('http://3.14.168.174/findUserByRole/3',{headers})
        .then((resp)=>{

            this.setState({data: resp.data.data})
        })
        .catch((err)=>{

            console.log(err);
        })
    }
    getImgUrl (image) {
     
        const chec=null;
        if(image == chec){
          return 'https://teckhubsolutions.com/assets/img/person-icon-male-user-profile-avatar-vector-18833568.jpg';
      
          $('img').att('src', image);
          console.log("default")
        }
        else{
         
          return image;
        }
        
      }

  render() {

    const colorforad= this.state.colorsd;
    return (
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
            <h1 style={{marginLeft: '0px', color: 'red'}}> <b>User Management</b></h1>
          
          </div>
          <div className="container">
          <div class="row">
          <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
       
            </div>
            </div>
          
        </div>
        
        <br />
        <Modal  show={this.state.show} animation={false} >  
           
            <Modal.Body style={{backgroundColor: "white"}} >
            
            <div class="card-container" style={{
	
	
	color: "#000",
	paddingTop: "30px",
	position: "relative",

	maxWidth: "100%",
	textAlign: "center"}}>
        <span class="pro" style={{
           
            padding: "",
            position: "absolute",
            top: "30px",
            left: "30px",
            
        }} ><button class="primary" style={{
            backgroundColor: "#FF0000",
            border: "1px solid #03BFCB",
            borderRadius: "3px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            padding: "10px 25px",
            fontSize: "10px"
        }}>
			{this.state.ad}
		</button></span>
        <br/>
        <br/>	
	<img class="round" src={this.getImgUrl(this.state.objde.profilePicturePath)} alt={this.state.objde.firstName}  style={{border: "2px solid #FF0000" ,boxShadow: "0px 0px 35px -5px rgba(0,0,0,0.75)",
	borderRadius: "50%",
	padding: "7px",
    width: "150px"}}/>
	<h2 style={{margin: "10px 0",fontSize: "30px"}}><b>{this.state.objde.firstName} {this.state.objde.lastName}</b></h2>
	{/* <h6 style={{margin: "5px 0",
	textTransform: "uppercase",fontSize: "15px"}}>noida a 74 sec 63 noida up india</h6> */}
    <p style={{margin: "10px 0",fontSize: "15px"}}>{this.state.objde.email} || {this.state.objde.mobileNumber}</p>
	<p style={{fontSize: "14px",
	lineHeight: "21px"}}>Password: ********** <a href="#">view</a> </p>
     <table className="table" id="tablecon">
              <thead className="table-head">
                <tr>
                 
                  <th scope="col" >Title</th>
                  <th scope="col" ><span style={{float: 'right'}}>Address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></th>
                </tr>
              </thead>
              <tbody>

                {this.state.useadr.map((data)=>{
                    return(<tr>
              
                        <td >{data.type}</td>
                        <td id="vde"><span style={{float: 'right'}}>{data.fullAddress} </span></td>
                        
                      </tr>)
                })}

              
              </tbody>
            </table>
	<div class="buttons">
	<a href={"/Usersorders/"+this.state.userid}>	<button class="primary" style={{
            backgroundColor: "#03BFCB",
            border: "1px solid #03BFCB",
            borderRadius: "3px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            padding: "10px 25px"
        }}>
			View Orders
		</button></a>
		
	</div>
	
</div>

            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "skyblue" }}><Button onClick={()=>{this.handleModal()}} style={{width: "105px", fontSize: "25px"}}>Close..</Button></Modal.Footer>
            </Modal>
        <div className="container" style={{marginLeft: "25px", marginRight: "25px"}}>
      </div>
        
                     <br/> <br/> <div className="row">
          <div className="col">
            <br />
            <table className="table" id="tablecon">
              <thead className="table-head">
                <tr>
                <th scope="col" >User Id</th>
                 
                  <th scope="col" >User Name</th>
                  <th scope="col" ><span style={{float: 'right'}}>Details &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></th>
                </tr>
              </thead>
              <tbody>
             
              {
                this.state.data.map((data,index)=>{
                    return(  <tr>
              <td >{data.id} </td>
                        <td >{data.firstName} {data.lastName}</td>
                        <td id="vde"><span style={{float: 'right'}}><a id={index} onClick={(e)=>{this.handleModal()
                          const token = localStorage.getItem('accessToken');
                         const position= e.target.id;
                          const headers = { 
                      
                           'Content-Type': 'application/json',
                            Authorization: `${token}`
                           }
                           
                        axios.get('http://3.14.168.174/findUserByRole/3',{headers})
                        .then((res)=>{

                            this.setState({objde: res.data.data[position]})
                            this.setState({useadr: res.data.data[position].userAddresses})
                            this.setState({userid: res.data.data[position].id })
                           // console.log(res.data.data[position].userAddresses)

                        })
                        .catch((err)=>{
                                console.log(err)
                        })

                        
                        }} style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                        
                      </tr>)

                })

                
              }   
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* /#page-content-wrapper */}
    {/* /#wrapper */}
    {/* jQuery */}
    {/*Container Main end*/}</div>
    )
  }
}
