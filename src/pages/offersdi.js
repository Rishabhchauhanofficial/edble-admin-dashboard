// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
class offersdi extends React.Component{

  constructor(props){
    super(props);
    this.state={
      show:false,
      branchid: "",
      seleteditems: [],
      campaigns: ["loading..."],
      titlefrescamp: "",
      free: "",
      buy: "",
      is: 2
    }
  }
  

  
  startcamp=()=>{
    const token = localStorage.getItem('accessToken');
    const config = {  
    headers: {'content-type': 'application/json', Authorization: `${token}`},
     
      
     }
     const sendingdata={
      
        branchId: this.state.branchid,
        campaignId: this.state.cid,
        is: this.state.is,
        id: this.state.seleteditems,
        
    
     }
     console.log(sendingdata)
    axios
    .post('http://3.14.168.174/campaign/setCampaignOnItem',sendingdata,config)
    .then(response => {
      console.log(response)
              
      if (response.data.code === 200) {
      
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then(()=>{
          window.location.href = "/Createacampaign/"+this.state.branchid;
        })
      
      } else {
        swal("Failed", response.data.message, "");
      }
        
    }) 
    .catch((err)=>{
      console.log(err)
    })

  }
  handleModal=()=>
  {

    this.setState({show:! this.state.show})

  
  }

  componentDidMount(){
        
        this.setState({branchid: this.props.match.params.id})
       this.setState({seleteditems: this.props.history.location.state.usersdata})
        console.log(this.props.history.location.state.usersdata);
        this.setState({is: this.props.match.params.is});
      
       
        const token = localStorage.getItem('accessToken');
        const headers = { 
    
         'Content-Type': 'application/json',
          Authorization: `${token}`
         }
        axios.get('http://3.14.168.174/campaign/getAllCampaignOfBranch/offer/'+this.props.match.params.id,{headers})
        .then((resp)=>{
          if(resp.data.data==null){

            this.setState({campaigns: []})
          }
          else{
          this.setState({campaigns: resp.data.data})
        }
         
          
        })
        .catch((err)=>{

          console.log(err)
        })


       

  }

  createfreshcamp=(e)=>{
    const token = localStorage.getItem('accessToken');
    const config = {  
    headers: {'content-type': 'application/json', Authorization: `${token}`},
     
      
     }
     const sendingdata={
      
        branchId: this.state.branchid,
        name: this.state.free,
        description: this.state.titlefrescamp
    
     }
     console.log(sendingdata)
    axios
    .post('http://3.14.168.174/campaign/add',sendingdata,config)
    .then(response => {
      console.log(response)
              
      if (response.data.code === 200) {
      
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then(()=>{
          window.location.href = "/offersdi/"+this.state.branchid,this.state={
          usersdata: this.state.seleteditems
          }
          
           
        })
      
      } else {
        swal("Failed", response.data.message, "");
      }
        
    }) 
    .catch((err)=>{
      console.log(err)
    })



  }

  handletitlefreshcamp =(e)=>{

this.setState({titlefrescamp: e.target.value})
console.log(this.state.titlefrescamp)
  }

  

  handlebuy=(e)=>{
    this.setState({buy: e.target.value})
    console.log(this.state.buy)

  }



  handlefree=(e)=>{
    this.setState({free: e.target.value})
    
    console.log(this.state.free)
  }

  
  handlecheck=(e)=>{
    

    this.setState({cid: e.target.value})
  
    
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
            <Modal style={{marginTop: "70px"}} show={this.state.show} animation={false} >  
           
            <Modal.Body style={{backgroundColor: "white"}} >
            
            <div class="card-container" style={{
	
	
	color: "#000",
	paddingTop: "60px",
	position: "relative",

	maxWidth: "100%",
	textAlign: "center"}}>
        <span class="pro" style={{
           
            padding: "",
            position: "absolute",
            top: "30px",
            left: "30px",
            
        }} ></span>

        <div style={{
          fontSize: "25px"
        }}><b>Create a Fresh <span style={{color: "red"}}>Campaign</span></b></div>
<br/>
<br/><br/>

        <div class="row">
        <form>
  <div class="row">
    <div class="container">
    <input type="text" style={{fontSize: "25px", marginLeft: "40px", width: "400px"}} class="form-control" placeholder="Enter the Title of Campaign" onChange={this.handletitlefreshcamp}/>
    <br/>
    <br/>
    </div>
    <br/>
    <br/>
 <div class="col" style={{
          fontSize: "25px"
        }}><b>Get</b></div>
    <div class="col">
      <input type="number" style={{fontSize: "25px"}} class="form-control" placeholder="" onChange={this.handlefree}/>
    </div>
    <div class="col" style={{
          fontSize: "25px"
        }}><b>% OFF...</b></div>
  </div>
  <br/><br/>
  <button style={{ backgroundColor: "#ff4c44", borderRadius: "25px", height: "45px", fontSize: "25px", color: "white"}}> <Link  onClick={this.createfreshcamp}style={{textDecoration: "none", color: "white"}}>Create</Link></button>
</form>
        </div>

        
</div>

            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "skyblue" }}><Button onClick={()=>{this.handleModal()}} style={{width: "105px", fontSize: "25px"}}>Close..</Button></Modal.Footer>
            </Modal>
            <br />
            <div className="container">
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "160px"}}><Link to={{pathname: "/offersdi/"+this.state.branchid+"/"+this.state.is, state: {
               usersdata: this.state.seleteditems
              }}} style={{textDecoration: "none", color: "white" }} >Offers Discount</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'white', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "160px"}}><Link to={{
      pathname: `/offersde/`+this.state.branchid+"/"+this.state.is,
    state: {
      usersdata: this.state.seleteditems
    }
    }} style={{textDecoration: "none", color: "red" }}>Offers  Deals</Link></b></div>
            </div>
              
              <br />
              <div class="container-fluid">
              <br/>
              <button style={{textAlign: "center", marginLeft: "400px", backgroundColor: "#ff4c44", borderRadius: "25px", height: "45px", fontSize: "25px", color: "white"}}> <Link  onClick={()=>{this.handleModal()}} style={{textDecoration: "none", color: "white"}}>Create New Campaign </Link></button>
              <br/>
  
  </div><br/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" style={{height: "450px", overflowY: "scroll" }} data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <div class= "container">
    {
      this.state.campaigns.map((data,index)=>{
        return(
          <>
           <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
            <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px', width: "1000px"}}   > &#11044; {data.description} <input type="checkbox" style={{float: "right", width: "20px"}}  value={data.id} onChange={this.handlecheck}></input></h1>
            
            </div>
            <br/> 
            </>
          )

      })
    }
  </div>
    </div>
    <br/>
    <div class="container">
    <button style={{textAlign: "center", marginLeft: "400px", backgroundColor: "#ff4c44", borderRadius: "25px", height: "45px", fontSize: "25px", color: "white"}}> <Link to="" style={{textDecoration: "none", color: "white"}} onClick={this.startcamp}>Start Campaign </Link></button>
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
export default offersdi;