// eslint-disable-next-line
import React, {Component} from 'react';
import {Button,Modal} from 'react-bootstrap';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
class BranchVendorstatsdata extends React.Component{

  constructor(props){
    super(props)
   
    this.state={
      show:false,
      show2: false,
      from: "",
      to: "",
      data: [],
      displaynodata: "",
      toTalearning: "",
      totalOrders: "",
      name: "",
      deliveryaddress: "",
      orderdetails:[],
      moblno: "",
      deliveredby: "",
      shipingcost: "",
      subtotal: "",
      total: "",
      branchid: ""
      
    } 
   

    
    
  }

 



  tofilter=(e)=>{
    this.setState({to: e.target.value})
    
  }
  fromfilter=(e)=>{

    this.setState({from: e.target.value})
  }
  
  handleModal =(e)=>
  {
    this.setState({show:! this.state.show})
  }
  handleModal2()
  {
    console.log("clicked modal 2")
    this.setState({show2:! this.state.show2})
  }

  filterapply=(e)=>{
    console.log("apply filter")

    e.preventDefault()
    console.log(this.state.from)
    console.log(this.state.to)
 

  }

  componentDidMount(){

    

    const formData = new FormData();
    formData.append('startDate',this.state.from);
    formData.append('endDate',this.state.to);
    

    
  
    const token = localStorage.getItem('accessToken');
    const config = {  method: 'POST',
    headers: {'content-type': 'multipart/form-data', Authorization: `${token}`},
     
      
     }

    axios.post("http://3.14.168.174/order/getAllStaticsByBranch/"+this.props.match.params.id,formData,config)
    .then((resp)=>{
      this.setState({data: resp.data.data})
      this.setState({totalOrders: resp.data.totalOrders})
      this.setState({toTalearning: resp.data.toTalearning})

   

    

    })
    .catch((err)=>{
      console.log(err)

    })

    


   
  }
    render(){
     

        return(
            <div>
               <Modal  show={this.state.show2} animation={false} > 
            <Modal.Header style={{fontSize: "25px", backgroundColor: "#ff2e34", color: "white",width:"750px"}}><span style={{marginLeft: "270px"}}>Select Date</span>
            
            </Modal.Header>
            <Modal.Body style={{width:"750px",backgroundColor: "white"}} >
            
            <hr/>
            
            <form>
<div class="container">
<h1><b>Select from </b> &nbsp;&nbsp;&nbsp;
<input type="date" required onChange={this.fromfilter}/>
</h1>
<h1 style={{marginLeft: "100px"}}><b>  To </b> &nbsp;&nbsp;&nbsp;
<input type="date" required  onChange={this.tofilter}/>
</h1>
<h1>
<button style={{borderRadius: '25px', backgroundColor: 'red', marginTop: '10px', width: '250px', fontSize: '25px'}}  className="btn btn-danger" onClick={()=>{this.handleModal2()}} >Submit</button>
</h1>
  
</div>
</form>

            </Modal.Body>
            <Modal.Footer style={{width:"750px",backgroundColor: "skyblue" }}><Button onClick={()=>{this.handleModal2()}} style={{width: "105px", fontSize: "25px"}}>Close..</Button></Modal.Footer>
            </Modal>
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
                
                  <h1 style={{ color: 'red'}}> <b>Sales Management</b></h1>
              </div>
              <div className="container">
              <div class="row">
              <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                
                <div class="col">
                <button onClick={()=>{this.handleModal2()}}
                type="button"
                className="btn btn-warning"
                style={{ borderRadius: "25PX", fontSize: '15', marginLeft: '650px', width:"100px"  }}
              ><img src="/assets/images/filter.png" style={{width: "20px"}}/>
                 &#160; <span style={{fontSize: "15px"}}>Filter</span> 
              </button>
                  </div>
                 
                </div>
                </div>
            </div>
            <br />
            <div className="container">
            <div className="row">
             
              
              
              <hr style={{marginTop: "20px"}}/>
              <hr/>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}} > <b className="com" style={{marginTop: "45px", marginLeft: "100px", textAlign: "center"}}><Link  style={{textDecoration: "none", color: "white " }}>Total No. of Order Delivered<br/>{this.state.totalOrders}</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '120px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com" style={{marginTop: "45px", marginLeft: "150px", textAlign: "center"}}><Link  style={{textDecoration: "none", color: "white" }}>Total Amount Earned <br/><img src="/assets/images/euro.png"  style={{width: "20px"}}/>{this.state.toTalearning}</Link></b></div>
              
            </div>
              
                <br />
            </div>
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
  <div class="row" style={{fontSize: "15px"}}><b>Sub Total:-{this.state.subtotal}</b></div>
  <div class="row" style={{fontSize: "15px"}}><b>Shipping Cost:- {this.state.shipingcost}</b></div>
  <hr/>
  <div class="row" style={{fontSize: "15px"}}><b>Total:- {this.state.total}</b></div>
  <hr/>
  <h1 style={{color: "red"}}>Delivery Details</h1>
  <div class="row">
    <div class="col" style={{fontSize: "15px"}}>
      <b>Name:-</b>{this.state.name}
    </div>
    <div class="col"style={{fontSize: "15px"}}>
      <b>Mobile NO:-</b> {this.state.moblno}
    </div>
    <hr/>
    <div class="row" style={{fontSize: "15px"}}>
      
      
      <div class="col"><b>Delivery Address:-</b> {this.state.deliveryaddress}</div>
      <div class="col"><b>Delivered By:</b> {this.state.deliveredby}</div>
    </div>
  </div>
</div>

            </Modal.Body>
            <Modal.Footer style={{width:"750px",backgroundColor: "skyblue" }}><Button onClick={this.handleModal} style={{width: "105px", fontSize: "25px"}}>Close..</Button></Modal.Footer>
            </Modal>



            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" style={{height: "450px", overflowY: "scroll" }} data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <table class="table" >
              
              <thead style={{backgroundColor: "pink"}}>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Date / Time</th>
                  <th scope="col">Earned</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data,index)=>{
             const timestamp = data.time; // This would be the timestamp you want to format
            
             const time=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
                  return(
                    <>
                     <tr>
                  <th scope="row">{index+1}</th>
                  <td>{data.orderId}</td>
                  <td>{time
                  
                  }</td>
                  <td> <img src="/assets/images/euro.png"  style={{width: "20px",marginLeft: "-5px"}}/> &nbsp;&nbsp;{data.price}</td>
                  <td><Link id={data.orderId} onClick={(e)=>{
        this.handleModal(); 
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
             total: resp.data.totalAmount

        
        })
        
  
      })
      .catch((err)=>{
  
        console.log(err);
      })
    

      
      
      
      }} style={{textDecoration: "none", color: "red"}}>View Details</Link></td>
                </tr>
                    </>
                  )
            
                })}
               
                
              </tbody>
            </table>
          
<hr/>

        
<hr/>
<h1 >{this.state.displaynodata}</h1>

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
export default BranchVendorstatsdata;