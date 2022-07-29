// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Camptypecate extends React.Component{

  
  constructor(props){
    super(props);
    this.state={
      branchid: "",
      data: [],
      seleteditems: [],
      is: 1
    }
    this.handleitems = this.handleitems.bind(this);
  }

  handleitems(e) {
        
    const { checked, value } = e.target;
    
    let { seleteditems } = this.state;
    if (checked) {
      seleteditems = [...seleteditems, value];
    } else {
      seleteditems = seleteditems.filter(el => el !== value);
    }
    this.setState({ seleteditems }, () => console.log(this.state));
  }


componentDidMount(){

  const branchid= this.props.match.params.id;
  this.setState({branchid: branchid})

  
  const token = localStorage.getItem('accessToken');
  const headers = { 

   'Content-Type': 'application/json',
    Authorization: `${token}`
   }

  axios.get('http://3.14.168.174/category/getAllCategory',{headers})
  .then((resp)=>{

this.setState({data: resp.data.data})

  })
  .catch((err)=>{
    console.log(err);
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
            <div className="container">
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'white', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "160px"}}><Link to={"/Camptypepro/"+this.state.branchid} style={{textDecoration: "none", color: "red" }} >Campaign On Product</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "160px"}}><Link to={"/Camptypecate/"+this.state.branchid} style={{textDecoration: "none", color: "white" }}>Campaign On Categories</Link></b></div>
            </div>
              
              <br />
              <div class="container-fluid">
              <br/>
              <br/>
    {/* <form class="d-flex">
      
      <div class="col"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: "500px", borderRadius: "100px", marginLeft: "250px", height:"60px", fontSize: "25px" , borderColor: "red"}}/></div>
      
      
    </form> */}
  </div><br/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" style={{height: "450px", overflowY: "scroll" }} data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <div class= "container">

{this.state.data.map((data,index)=>{
  return(
    <>
    <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
    <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px', width: "1000px"}}   > &#11044; {data.name} <input type="checkbox" value={data.id} style={{float: "right", width: "20px"}} onChange={this.handleitems}></input></h1>
    
    </div>
    <br/>
    </>
  )
})}

        
</div>
    </div>
  
    <br/>
    <div class="container">
    <button style={{textAlign: "center", marginLeft: "500px", backgroundColor: "#ff4c44", borderRadius: "25px", height: "45px", fontSize: "25px", color: "white"}}> <Link to={{
      pathname: `/offersdi/`+this.state.branchid+"/"+this.state.is,
    state: {
      usersdata: this.state.seleteditems
    }
    }} style={{textDecoration: "none", color: "white"}}>Next </Link></button>
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
export default Camptypecate;