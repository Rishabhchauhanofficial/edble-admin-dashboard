// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
class Editcampdi extends React.Component{
constructor(props){
  super(props);
  this.state={
    branchid: "",
    campid: "",
    camptitle: "Loading....",
    free: "null",
    buy: "null",
    name: "...",
    campaign: {},
    data: [],
    val: "Loading..."
  }
}

componentDidMount(){
  const branchid= this.props.match.params.id;
  const campaign = this.props.match.params.campid;
  this.setState({campid: campaign})
  this.setState({branchid: branchid})

  const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }

     const url='http://3.14.168.174/campaign/getItemsByCampaignNameOfBranch/'+campaign+"/"+branchid
   
     axios.get(url,{headers})
     .then((resp)=>{
    
    this.setState({campaign: resp.data.campaign})
    this.setState({data: resp.data.data})
    this.setState({camptitle: resp.data.campaign.description})
    this.setState({name: resp.data.campaign.name })
    this.setState({buy: resp.data.campaign.buy })
    this.setState({free: resp.data.campaign.free })
    this.setState({val: resp.data.val})
    

     })
  .catch((err)=>{
    console.log(err)
  })
}

handletitle=(e)=>{

  this.setState({camptitle: e.target.value})

}

handlefree=(e)=>{

  this.setState({name: e.target.value})

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
          <div class="container">
              <div class="row justify-content-center">
                
                  <h1 style={{ color: 'red'}}> <b>Campaign & Promotions </b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">
                            <br />
            </div>
            <form>
            <div className="row">
                <div className="col" id="nm">
                  <input type="text" value={this.state.camptitle} onChange={this.handletitle} placeholder={this.state.camptitle} style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}/>
                </div>
                
              </div>
              <div class="row" style={{width: '350px',marginLeft: '45px'}}>
   
    <br/>
    <br/>
  
   <div class="col" style={{
          fontSize: "25px"
        }}><b>Get</b></div>
    <div class="col">
      <input type="number" style={{fontSize: "25px",marginLeft: "-70px"}} class="form-control" value={this.state.name} onChange={this.handlefree} placeholder="1" />
    </div>
    <div class="col" style={{
          fontSize: "25px", marginLeft: "-80px"
        }}><b>% OFF...</b></div>
  </div>
  <br/>
  <br/><br/>
<h1>Campaign Running On {this.state.val}</h1>
{this.state.data.map((data,index)=>{
    return(
<>
<div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
            <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px', width: "1000px"}}   > &#11044; {data.itemName} <input type="checkbox" style={{float: "right", width: "20px"}} value="{data.id}"></input></h1>
            
            </div>
           <br/>
</>
    )
})}
            

       
              <button id="btnn" type="button" className="btn btn-danger">Save Detail</button>
            </form>
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
export default Editcampdi;