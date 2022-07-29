// eslint-disable-next-line
import React, {Component} from 'react';
import axios from 'axios';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



class Automaticnotification extends React.Component{

constructor(props){
  super(props);
  this.state = { data: [],
  
    subject: '',
    detail: '',
    users: [ ],
    data: [ ]
  
  }
  const token = localStorage.getItem('accessToken');
  const headers = { 

   'Content-Type': 'application/json',
    Authorization: `${token}`
    
   }


  axios.get('http://3.14.168.174/getNotification/33' ,{headers})
  .then((resp)=>{

    this.setState({data: resp.data.data})
    
  })
  .catch((err)=>{

    console.log(err)
  })

 
}



    
  
  
 
  componentDidMount(){
       
   
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
    <div class="container">
              <div class="row justify-content-center">
                
                  <h1 style={{ color: 'red'}}> <b>Automatic Notifications</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                
                </div>
              </div>
            </div>
 
      {/* <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px', alignItems: 'center'}}> <b className="com"><Link to="/Notification" style={{color: "red", textDecoration: "none", textAlign: "center"}}>Manual Notification</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)'  }}><b className="inc"><Link to="/Automaticnotification" style={{color: "white", textDecoration: "none", textAlign: "center"}}> View Notifications </Link></b></div>
            </div> */}

           

            <br/> <div className="row">
              <div className="col">
                <br />
                <table className="table" id="tablecon">
                  <thead className="table-head">
                    <tr>
                      
                      <th scope="col" >&nbsp; &nbsp; &nbsp; &nbsp;Notification</th>
                      <th>Info</th>
                      <th scope="col" ><span style={{float: "right" }}>Time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></th>
                    </tr>
                  </thead>
                  <tbody>
               {this.state.data.reverse().map((data)=>{const timestamp = data.time; // This would be the timestamp you want to format
            
            const time=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
                return(<>
                 <tr>
                    
                    <td><img style={{width: "40px"}} src={this.getImgUrl(data.image)} />{data.sender.firstName} {data.sender.lastName}</td>
                    <td><b>{data.title}</b>  {data.message} </td>
                    <td id="vde"><span style={{float: 'right'}}>{time} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></td>
                    
                  </tr>
                </>)
               })}

                   
                  
                  </tbody>
                </table>
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
export default Automaticnotification