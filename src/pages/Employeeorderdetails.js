// eslint-disable-next-line
import React, {Component} from 'react';
import "./employeeorderdetails.scss";
import {Redirect} from 'react-router-dom';
class Employeeorderdetails extends React.Component{
  
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
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Branch Vendor Management</b></h1>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="assets/images/back_button.png" /></div>
                  
                </div>
                <div className="row">
                  <div className="col">
                    <h4 id="deta">John@gmail.com <img id="linee" src="assets/images/linever.png" /> +1(69997943) <img id="linee" src="assets/images/linever.png" /> 1041 bnnet road florida Ny14063 USA </h4>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com">Complete Order</b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px'}}><b className="inc"> Incoming Order</b></div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col">
                <br />
                <table className="table" id="tablecon">
                  <thead className="table-head">
                    <tr>
                      <th scope="col">Order Id</th>
                      <th scope="col"><span id="det">Details</span></th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#56221</td>
                      <td><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td id="vde"><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td id="vde"><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td id="vde"><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td id="vde"><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                    <tr>
                      <td>#56221</td>
                      <td id="vde"><span id="vde"><a href="#" style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="assets/images/euro sigh.png" alt="" /> 150.00</td>
                    </tr>
                  </tbody>
                </table>
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
export default Employeeorderdetails