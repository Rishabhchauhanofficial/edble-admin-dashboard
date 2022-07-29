// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Supervendorstatics extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data2: []
    }
  }

  
  componentDidMount(){
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
    axios.get('http://3.14.168.174/get-supermarket',headers)
    .then((resp)=>{
      console.log(resp)
      this.setState({data2: resp.data.data})

    })
    .catch((err)=>{
console.log(err)
    })

  }

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
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'white', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "20px"}}><Link to="Supervendorstatics" style={{textDecoration: "none", color: "red" }}>Specific Super Vendor Statics</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "20px"}}><Link to="Branchvendorstatics" style={{textDecoration: "none", color: "white" }}>Specific Branch Vendor Statics</Link></b></div>
              
              
              <hr style={{marginTop: "20px"}}/>
              <hr/>
              <div className="row">
              <div className="col">
                <br />
                <table className="table" id="tablecon">
                  <thead className="table-head">
                    <tr>
                      <th scope="col">Super Market Name</th>
                      <th scope="col" ><span style={{float: 'right'}}>view stats &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.state.data2.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 
                    <tr>
                   
                      <td>{data.name}</td>
                      <td id="vde"><span style={{float: 'right'}}><a href={"/Supervendorstatsdata/"+data.id} style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      
                    </tr>
                    ) } ) }
                
                  </tbody>
                </table>
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
export default Supervendorstatics;