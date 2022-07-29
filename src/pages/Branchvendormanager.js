// eslint-disable-next-line
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./employeeorderdetails.scss";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Branchvendormanager extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: [],
      name:"",
      address: "",
      branchid: ""
    }
        
  }
  componentDidMount(){

    const id=this.props.match.params.id;
    const name=this.props.match.params.name;
    const address=this.props.match.params.address;
    this.setState({address: address})
    this.setState({name: name})
    this.setState({branchid: id})
    const token = localStorage.getItem('accessToken');
    const headers = { 

      'Content-Type': 'application/json',
       Authorization: `${token}`
      }
    axios.get('http://3.14.168.174/getEmpOrMan/1/'+id,{headers})
    .then((resp)=>{

      console.log(resp)
      this.setState({data: resp.data.data})
      console.log(this.state.data)
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
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Branch Vendor Management</b></h1>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="/assets/images/back_button.png" onClick={this.props.history.goBack} /></div>
                  
                  
                </div>
                <div className="row">
                  <div className="col">
                    <h4 id="deta"><b>{this.state.name} </b>{this.state.address} </h4>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px', alignItems: 'center'}}> <b className="com"><Link to={"/Branchvendoremployee/"+this.state.branchid+"/"+this.state.name+"/"+this.state.address} style={{color: "white", textDecoration: "none", textAlign: "center", color:"red"}}>Employee</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)'}}><b className="inc"><Link to={"/Branchvendormanager/"+this.state.branchid+"/"+this.state.name+"/"+this.state.address} style={{color: "white", textDecoration: "none", textAlign: "center", color:"white"}}> Manager</Link></b></div>
            </div>
            <br /><br />
            <div class="row" style={{marginLeft: "70px" , marginTop: "0px"}}>
                    <div class="col" style={{marginLeft: "10px"}}><Link to={"/Addemployee/"+this.state.branchid}><button type="button" class="btn btn-danger" style={{color: "white", fontSize: "20px", width: "250px " , height: "50px" , borderRadius: "25px", backgroundColor: "red"}}>Add Employee</button></Link></div>
                    <div class="col"><Link to={"/Addmanager/"+this.state.branchid}><button type="button" class="btn btn-danger" style={{color: "white", fontSize: "20px", width: "250px " , height: "50px", borderRadius: "25px", backgroundColor: "red"}}>Add Manager</button></Link></div>
                </div>
            <div className="row">
              <div className="col">
                <br />
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Edit</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Order Details</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.data.map((data)=>{
return( <tr>
  <th scope="row"><img src="/assets/images/editicon.png"/></th>
  <td>{data.email}</td>
  <td>*******</td>
  <td>{data.mobileNumber}</td>
  <td><Link to={"/Foodcompleteongoingorder/"+data.id+"/"+this.state.branchid+"/"+data.firstName+"/"+data.lastName+"/"+data.email+"/"+data.mobileNumber} style={{color: "red", textDecoration: "none"}}>View Details</Link></td>
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
        {/*Container Main end*/}


</div>
)
}
}
export default Branchvendormanager