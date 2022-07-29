// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import axios from 'axios';





class Addbranchvendor extends React.Component{

    constructor(props){
      super(props);
      this.state={
        name: "",
        password: "",
        email: "",
        address: "",
        mobileno: "",
        deliveryrad: "",
        file: "",
        supermarketId: ""
      }
    }
    
    componentDidMount(){
      this.setState({
        supermarketId: this.props.match.params.id
      })
    }

    setFile = (e)=>{
      this.setState({file: e.target.files[0]})
   
     }
     
     setaddress=(e)=>{
      this.setState({address: e.target.value})

     }

     setdeliveryrad=(e)=>{
      this.setState({deliveryrad: e.target.value})
     }

     setemail=(e)=>{
      this.setState({email: e.target.value})
     }

     setname=(e)=>{

      this.setState({name: e.target.value})

     }

     setnumber=(e)=>{
      this.setState({mobileno: e.target.value})
     }

     setpassword=(e)=>{
      this.setState({password: e.target.value})
     }
     
  handleSubmit = () =>{

  

    const formData = new FormData();
    formData.append('files',this.state.file);
    formData.append('name',this.state.name);
    formData.append('address',this.state.address);
    formData.append('email',this.state.email);
    formData.append('mobileNumber',this.state.mobileno);
    formData.append('deliveryRadius',this.state.deliveryrad);
    formData.append('password',this.state.password);
    formData.append('superMarketId',this.state.supermarketId);
    formData.append('roleName',"BRANCH VENDOR");
    
    console.log(formData)
    
    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

    axios.post("http://3.14.168.174/add-Branch", formData, config )
    .then(response => {
        
      if (response.data.code === 200) {
      
        swal("Success", response.data.message, "", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          window.location.href = "/Addbranchvendor/"+this.state.supermarketId;
         
  
                });
      } else {
        swal("Failed", response.data.message, "");
      }
        
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
              <div className="container">
                <div className="row">
                  <div className="col"><img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="/assets/images/back_button.png" /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row" style={{backgroundColor: '#444444', borderRadius: '25px', height: '250px', width: '1000px', marginLeft: '20px'}}>
                
              <div class="image-upload">
                    <label for="file-input">
                        <img style={{
marginLeft: '630px',
marginTop: '80px',}} src={uploadimg}/>
                    </label>
                    <label for="file-input">
                      <h1 style={{
color: 'rgb(255, 255, 255)',
marginLeft: '100px', marginTop: "50px"}} for="file-input">Upload Image</h1>
                    </label>
                    
                  
                    <input id="file-input" type="file" onChange={this.setFile}/>
                  </div>
              </div>
              <br />
            </div>
            <form>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} value={this.state.name} onChange={this.setname} />
                </div>
                <div className="col" id="nm">
                  <input type="email" placeholder="Email Id" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}  value={this.state.email} onChange={this.setemail}/>
                </div>
              </div>
              <div className="row">
                <div className="col" id="nm">
                  <input type="password" placeholder="Password" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",color: "black"}} value={this.state.password} onChange={this.setpassword}/>
                </div>
                <div className="col" id="nm">
                  <input type="Address" placeholder="Address" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} value={this.state.address} onChange={this.setaddress}/>
                </div>
              </div>
              <div className="row">
                <div className="col" id="nm">
                  <input type="Mobile Number" placeholder="Mobile Number" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} value={this.state.number} onChange={this.setnumber}/>
                </div>
                <div className="col" id="nm">
                  <input type="Mobile Number" placeholder="Delivery Radius" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} value={this.state.deliveryrad} onChange={this.setdeliveryrad}/>
                </div>
              </div>
              <div className="row" id="mm">



                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3523160677714!2d77.3778711148151!3d28.61920108242313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef53a1b869c1%3A0xa7dbe8d1791bf7a1!2sInterest%20Bud%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1628688161274!5m2!1sen!2sin" width={100} height={400} style={{border: '1px solid'}} allowFullScreen loading="lazy" /> */}
               

                
              </div>
              <button id="btnn" type="button" className="btn btn-danger" onClick={this.handleSubmit}>Save Detail</button>
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
export default Addbranchvendor;