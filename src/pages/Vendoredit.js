// eslint-disable-next-line
import axios from 'axios';
import React, {Component} from 'react';
import "./vendoredit.scss";
class Vendoredit extends React.Component{
constructor(props){
  super(props);
  this.state={
    img: "",
    name: "",
    email: "",
    password: "",
    address: "",
    mobilno: "",
    delrad: "",
    

  }
}

getimg=()=>{

}
getname=()=>{

}
getadd=()=>{

}
getemail=()=>{

}

getpass=()=>{

}
getmobno=()=>{


}

getdelrad=()=>{


}
  
componentDidMount(){
  const token = localStorage.getItem('accessToken');
  const headers = { 

   'Content-Type': 'application/json',
    Authorization: `${token}`
    
   }

  axios.get('http://3.14.168.174/getBranchById/'+this.props.match.params.id,{headers})
  .then((resp)=>{

    console.log(resp)
    this.setState({name: resp.data.name})
    this.setState({address: resp.data.address})
    this.setState({email: resp.data.email})
    this.setState({delrad: resp.data.deliveryRadius})
    this.setState({mobilno: resp.data.mobileNumber})
    this.setState({address: resp.data.address})


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
              <div className="row justify-content-center">
                <h1 style={{ color: 'red'}}> <b>Branch Vendor Management</b></h1>
              </div>
              <br />
              <br />
              <div className="container">
                <div className="row">
                  <div className="col"><img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack}  /></div>
                  <div className="col">
                    <h1 style={{marginLeft: '-50px', marginRight: '-450px', marginTop: '-2px'}}> </h1>
                  </div>
                  <div className="col" style={{marginLeft: '900px', marginTop: '-40px'}}>
                    
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col">
                  <img style={{marginLeft: '10px', borderRadius: '25px', height: '300px', width: '1000px', boxShadow: '3px 2px 10px rgb(219, 218, 218)', backgroundRepeat: 'no-repeat'}} src="/assets/images/big_bazaar.jpg" alt="" />
                  <div className="row">
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
                    
                  
                    <input id="file-input" type="file"  onChange = {(e) => setFile(e.target.files[0])} />
                  </div>
                  </div>
                </div>
              </div>
              <br /> 
            </div>
            <form>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="text" value={this.state.name} style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} />
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="email" placeholder="Email Id"style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}} />
                </div>
              </div>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="password" placeholder="Password" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",color: "black"}}/>
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="Address"  value={this.state.address} placeholder="Address" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
              </div>
              <div className="row">
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="Mobile Number" value={this.state.mobilno} placeholder="Mobile Number" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
                <div className="col" style={{marginLeft: '50px', marginBottom: '25px'}}>
                  <input type="text" value={this.state.delrad} placeholder="Delivery Radius" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
              </div>
              <button style={{borderRadius: '25px', backgroundColor: 'red', marginLeft: '400px', marginTop: '10px', width: '250px', fontSize: '25px'}} type="button" className="btn btn-danger">Save Detail</button>
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
export default Vendoredit