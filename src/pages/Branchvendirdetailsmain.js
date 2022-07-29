// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';

class Branchvendirdetailsmain extends React.Component{




  state = { data: [],branches: [],showdetails: 0};

 
  componentDidMount(){

    const branchvendorindex = this.props.match.params.id;

    const supervendorindex = this.props.match.params.id2;
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
     const response = axios
            .get("http://3.14.168.174/get-supermarket", {headers})
            .then((response) => {
                this.setState({ branches: response.data.data[supervendorindex].branches[branchvendorindex]});
               
                

            })
            .catch((error) => console.error(`Error:  ${error}`));

  }

 


 
  

    render(){

      const {branches} = this.state;
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
              <div className="row justify-content-center">
                <h1 style={{ color: 'red'}}> <b>Branch Vendor Management</b></h1>
              </div>
              <br />
              <br />
              <div className="container">
                <div className="row">
                  <div className="col"><img src="/assets/images/back_button.png" onClick={this.props.history.goBack} style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} /><Link to={"/Vendoredit/"+branches.id}><button id="editbtnn" type="button" className="btn btn-danger">Edit Profile</button> </Link></div>
                 
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="container">
                <div class="row" >
                    <img style={{marginLeft: '10px',
                    borderRadius: '25px', height: '300px', width: '1000px', boxShadow: '3px 2px 10px rgb(219, 218, 218)'}} src={branches.imagePath} alt=""/>
                    
                    <h1 style={{
                    marginTop: '15px', marginLeft: '0px',
                    fontWeight: '60px'}}><span ><b>{branches.name} 
                      
                      {
                        
                      }
                      
                      </b></span></h1>
                    <p style={{ fontSize: '15px', textAlign: 'center'}}><b>{branches.address}</b></p>
                    
                </div>
                <br/><hr/>
                <div class="row">
                    <div class="col" style={{fontSize: '20px', marginLeft: "50px",  marginRight: '10px'}}> <span style={{color: '#747171'}}><b>Email ID:-</b></span> <b>{branches.email}</b></div>
                    <div class="col" style={{fontSize: '20px',  marginRight: '10px'}}><span style={{color: '#747171'}}> <b>Password:-</b></span><b> vishalmega@123</b></div>
                    
                </div>
                <br/><div class="container">
                <div class="row">
                    <div class="col" style={{
                    fontSize: '20px', marginRight: '10px',marginLeft: "50px",
                    width: '10px' , height: "50px"}}> <span style={{color: '#747171'}}><b>Mobile Number:</b></span> <b>{branches.mobileNumber}</b></div>
                     <div class="col" style={{
                    fontSize: '20px', 
                    
                     marginRight: '10px',
                    width: '100px' , height: "50px"}}>
                      <span style={{color: '#747171'}}><b>Delivery Radius:</b></span> <b>{branches.deliveryRadius}</b></div>
                     
                  </div>
                  <hr/>
                <div class="row" style={{marginLeft: "50px" , marginTop: "30px"}}>
                    <div class="col" style={{marginLeft: "10px"}}><Link to={"/Branchorderdetails/"+branches.id}><button type="button" class="btn btn-danger" style={{color: "white", fontSize: "20px", width: "250px " , height: "50px" , borderRadius: "25px", backgroundColor: "red"}}>View Order Details</button></Link></div>
                    <div class="col"><Link to={"/Branchvendoremployee/"+branches.id+"/"+branches.name+"/"+branches.address}><button type="button" class="btn btn-danger" style={{color: "white", fontSize: "20px", width: "250px " , height: "50px", borderRadius: "25px", backgroundColor: "red"}}>View Employee Details</button></Link></div>
                </div>
                </div>
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
export default Branchvendirdetailsmain