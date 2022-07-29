// eslint-disable-next-line
import React, {Component} from 'react';
import "./foodcompleteongoingorder.scss";
import {Redirect} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Foodcompleteongoingorder extends React.Component{
  constructor(props){
    super(props)
   
    this.state={
      show:false,
      data: [],
      fname:"",
      lname: "",
      emailaddress: "",
      branchid: "",
      phoneno: "",
      empid: "",
      orderdetails:[],
      name: "loading..",
      deliveryaddress: "loading..",
       moblno: "loading..",
       deliveredby: "loading..",
        shipingcost: "loading..",
        subtotal: "loading..",
         total: "loading..",
         address: "loading..",
         status: "loading"


    } 
  }

    
  componentDidMount(){

    const empid=this.props.match.params.id;
    const branchid=this.props.match.params.branchid;
    const fname=this.props.match.params.fname;
    const lname=this.props.match.params.lname;
    const phone=this.props.match.params.phone;
    const emailaddress=this.props.match.params.email;
    this.setState({empid: empid})
    this.setState({emailaddress: emailaddress})
    this.setState({phoneno: phone})
    this.setState({fname: fname})
    this.setState({lname: lname})
    this.setState({branchid: branchid})
    const token = localStorage.getItem('accessToken');
    const headers = { 

      'Content-Type': 'application/json',
       Authorization: `${token}`
      }
    axios.get('http://3.14.168.174/order/getOrdersOfEmployee?branchId='+branchid+'&status=ongoing-order&empId='+empid,{headers})
    .then((resp)=>{

      // console.log(resp)
      this.setState({data: resp.data.data})
      console.log(this.state.data)
    })
    .catch((err)=>{
      console.log(err)

    })
        
  }

  handleModal=(e)=>
  {
    this.setState({show:! this.state.show})
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
                  <div className="col">
                    <h1 style={{marginRight: '-30px', marginLeft: '-70px',width: "200px", marginTop: '0px', fontSize: "20px"}}><b>{this.state.fname+" "+this.state.lname}</b></h1>
                  </div>
                  <div className="col" style={{marginLeft: '800px'}}>
                    Notification
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4 id="deta">{this.state.emailaddress} <img id="linee" src="/assets/images/linever.png" /> {this.state.phoneno} <img id="linee" src="/assets/images/linever.png" /> 1041 bnnet road florida Ny14063 USA </h4>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <Modal  show={this.state.show} animation={false} >  
            <Modal.Header style={{fontSize: "25px", backgroundColor: "#ff2e34", color: "white",width:"750px"}}><span style={{marginLeft: "270px"}}>Details Page</span></Modal.Header>
            <Modal.Body style={{width:"750px",backgroundColor: "white"}} >
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {
      this.state.orderdetails.map((data)=>{
        return(
          <tr>
      <th scope="row"><img src={data.branchItemStock.image} style={{width: "50px",height: "20px", borderRadius: "20px", }}/><br/><span style={{marginLeft: "20px"}}>#{data.branchItemStock.id}</span></th>
      <td>{data.branchItemStock.name}</td>
      <td>{data.qty}</td>
      <td>{data.price}</td>
    </tr>
        )

      })
    }
   
  </tbody>
</table>
<div class="container">
  <div class="row" style={{fontSize: "15px"}}><b>Sub Total:- +{this.state.subtotal}</b></div>
  <div class="row" style={{fontSize: "15px"}}><b>Shipping Cost:- +{this.state.shipingcost}</b></div>
  <hr/>
  <div class="row" style={{fontSize: "15px"}}><b>Total:- {this.state.total}</b></div>
  <hr/>
  <h1 style={{color: "red"}}>Delivery Details</h1>
  <div class="row">
    <div class="col" style={{fontSize: "15px"}}>
      <b>Name:-</b> {this.state.name}
    </div>
    <div class="col"style={{fontSize: "15px"}}>
      <b>Mobile NO:-</b> {this.state.moblno}
    </div>
    <div class="col" style={{fontSize: "15px"}}><b>Status:- </b> {this.state.status}</div>
    <hr/>
    <div class="row" style={{fontSize: "15px"}}>
      
      
      <div class="col"><b>Delivery Address:-</b> {this.state.address}</div>
      <div class="col"><b>Delivered By:</b> {this.state.deliveredby}</div>
    </div>
    
  </div>
</div>

            </Modal.Body>
            <Modal.Footer style={{width:"750px",backgroundColor: "skyblue" }}><Button onClick={()=>{this.handleModal()}} style={{width: "105px", fontSize: "25px"}}>Close..</Button></Modal.Footer>
            </Modal>
            <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com"><Link to={"/Foodcompleteongoingorder/"+this.state.empid+"/"+this.state.branchid+"/"+this.state.fname+"/"+this.state.lname+"/"+this.state.emailaddress+"/"+this.state.phoneno} style={{textDecoration: "none", color:"white"}}>Complete Order</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px'}}><b className="inc"> <Link to={"/Foodongoingorder/"+this.state.empid+"/"+this.state.branchid+"/"+this.state.fname+"/"+this.state.lname+"/"+this.state.emailaddress+"/"+this.state.phoneno} style={{textDecoration: "none", color: "red"}}>Ongoing Order</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px'}}><b className="inc"> <Link to={"/Foodincomingorder/"+this.state.empid+"/"+this.state.branchid+"/"+this.state.fname+"/"+this.state.lname+"/"+this.state.emailaddress+"/"+this.state.phoneno} style={{textDecoration: "none", color: "red"}}>Incoming Order</Link></b></div>
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
                    {this.state.data.map((data)=>{
                      return(
<tr>
                      <td>{data.orderId}</td>
                      <td><span id="vde"><a id={data.orderId} href="#" onClick={(e)=>{this.handleModal(); 
                      
                      const odrid= e.target.id;
                         
                      
                         const token = localStorage.getItem('accessToken');
                         const headers = { 
                     
                          'Content-Type': 'application/json',
                           Authorization: `${token}`
                          }
                     
                         axios.get("http://3.14.168.174/order/getOrderByOrderId/"+odrid,{headers})
                         .then((resp)=>{
                 console.log(resp.data)
                           this.setState({orderdetails: resp.data.orderInfo})
                            this.setState({name: resp.data.fullName,
                             deliveryaddress: resp.data.address,
                              moblno: resp.data.mobileNumber,
                              deliveredby: resp.data.employeeName,
                               shipingcost: resp.data.shippingCost,
                               subtotal: resp.data.subTotalAmount,
                                total: resp.data.totalAmount,
                                status: resp.data.status,
                                address: resp.data.address
     
                           
                           })
                           
                     
                         })
                         .catch((err)=>{
                     
                           console.log(err);
                         })
                       

                     }} style={{textDecoration: 'none'}}>View Details <img src="/assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      <td><img src="/assets/images/euro sigh.png" alt="" /> {data.price}</td>
                    </tr>
                      )
                    })}
                    
                    
                   
                  
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
    export default Foodcompleteongoingorder
