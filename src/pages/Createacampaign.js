// eslint-disable-next-line
import React, {Component} from 'react';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Createacampaign extends React.Component{

  constructor(props){
    super(props);
    this.state={
      branchid: "",
      runigcamp: []
    }
  }
  componentDidMount(){


    const branchid=this.props.match.params.id
    this.setState({branchid: branchid})
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
     const url="http://3.14.168.174/campaign/getRunningCampaignOfBranch/"+branchid

     console.log(url)
    axios
    .get(url,{headers})
    .then((resp)=>{

      console.log(resp);
      this.setState({runigcamp: resp.data.data})
    })

    .catch((err)=>{
      console.log(err)

    })
  }

  handleredirection=(e)=>{

   
    const check=0;
    const val=e.target.id;
    const campid=e.target.name;
    console.log(campid)

  
    if(check==val){

      window.location.href = "/Editcapm/"+this.state.branchid+"/"+campid;

    }
    else{

      window.location.href = "/Editcampdi/"+this.state.branchid+"/"+campid;
     
    }
    

    

  }
 
    render(){
      



      
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
          <img src="/assets/images/logo.png" alt style={{ width: 130 }} />
        </a>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        {/*<div class="boy"></div>*/}
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
                
                  <h1 style={{ color: 'red'}}> <b>Campaign & Promotions</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
      <br />
      <br />
     <div clasName="container">
     
     <button style={{textAlign: "center", marginLeft: "400px", backgroundColor: "#ff4c44", borderRadius: "25px", height: "45px", fontSize: "25px", color: "white"}}> <Link to={"/Camptypepro/"+this.state.branchid} style={{textDecoration: "none", color: "white"}}>Create a Campaign</Link></button>
         
         </div>
         <br/>
         <br/>
         <div className="container">
         <h1 style={{float: "left", marginLeft: '20px'}}><b>All Running Campaign</b></h1>  
         </div>
         {
          this.state.runigcamp.map((data,index)=>{
            return(
              <>
              <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
            <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px', width: "400px"}}   > &#11044; {data.description}  </h1><Link  onClick={this.handleredirection} ><img id={data.name}  name={data.id} style={{width: '50px', marginLeft: '1020px'}} src="/assets/images/editicon.png"></img></Link>
            
            </div>
            <br/> 
              </>
            )

          })
         }
         
            
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
export default Createacampaign