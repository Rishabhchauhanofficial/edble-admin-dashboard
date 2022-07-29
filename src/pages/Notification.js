// eslint-disable-next-line
import React, {Component} from 'react';
import axios from 'axios';
import "./supervendormanagement.scss";
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



class Notification extends React.Component{

constructor(props){
  super(props);
  this.state = { data: [],
  
    subject: '',
    detail: '',
    users: [ ]
  
  }
  this.handleusers = this.handleusers.bind(this);

}

  
    handlesubject = event => {this.setState({ subject: event.target.value })}
    handledetail = event => {this.setState({ detail: event.target.value })}
   // handleusers = event => {this.setState({ users: event.target.value })}
    handleusers(e) {
      
      const { checked, value } = e.target;
      
      let { users } = this.state;
      if (checked) {
        users = [...users, {id: value}];
      } else {
        users = users.filter(e => e.id != value);
        console.log(users)
      }
      this.setState({ users }, 
        () => console.log(this.state));
    }

    
    handleSubmit = event => {
      event.preventDefault();
  
       const users = {users: this.state.userid};
       const subject = {subject: this.state.fullname};
       const detail = {detail: this.state.usergroup};

  
      
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
     }
      axios.post('http://3.14.168.174/sendNotification',
        { 
          subject: this.state.subject,
          detail: this.state.detail,
          users: this.state.users
          
        },{headers})

       
         
        .then(response => {
          if (response.data.code === 200) {
       
    
            // console.log(recipeid)
    
             swal("Success", response.data.message, "", {
               buttons: false,
               timer: 2000,
             })
             .then((value) => {
               window.location.href = "/Notification";
              
       
                     });
           } else {
             swal("Failed", response.data.message, "");
           }

          console.log(response);
          console.log(response.data);
        })
    }
  
 
  componentDidMount(){

   
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }


     

     const response = axios
            .get("http://3.14.168.174/findUserByRole/3", {headers})
            .then((response) => {
               
                this.setState({ data: response.data.data});
                //console.log(response.data.data)
            })
            .catch((error) => console.error(`Error:  ${error}`));


                  
  }




  

 
    render(){
    

      const { data } = this.state;
      
      
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
          <img src="assets/images/logo.png" alt style={{ width: 130 }} />
          </a>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
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
                
                  <h1 style={{ color: 'red'}}> <b>Manual Notifications</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
      
      {/* <div className="row">
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', borderRadius: '5px', alignItems: 'center'}}> <b className="com"><Link to="/Notification" style={{color: "white", textDecoration: "none", textAlign: "center"}}>Manual Notification</Link></b></div>
              <div className="col" style={{fontSize: '20px', boxShadow: '3px 2px 10px rgba(175, 175, 175, 0.685)', marginRight: '10px', height: '70px', borderRadius: '5px'}}><b className="inc"><Link to="/Automaticnotification" style={{color: "red", textDecoration: "none", textAlign: "center"}}> View Notifications </Link></b></div>
            </div> */}

            <br/><br/><br/><br/>
      <div class="container">
      <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col">
          
  <div class="mb-3">
    
  
    <input type="text" required name="this.state.subject" onChange={this.handlesubject}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please Enter Title" style={{height: "50px", borderRadius: "20px", fontSize: "25px"}}/>
    
  </div>
  <div class="mb-3">
  
  
  <textarea class="form-control" required name="this.state.detail" onChange={this.handledetail}  id="exampleFormControlTextarea1" rows="3" placeholder="Please Enter Description" style={{height: "200px", borderRadius: "20px", fontSize: "25px"}}></textarea>  
  </div>
  
  <button type="submit" class="btn btn-primary" style={{backgroundColor: "red", width: "200px", height: "40px", marginLeft: "135px", borderRadius: "50px", border: "none"}}><span style={{fontSize: "20px"}}><b>Send Message</b></span></button>



          </div>
          <div class="col">
            
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" style={{height: "450px", overflowY: "scroll" }} data-bs-offset="0" class="scrollspy-example" tabindex="0">
          <table class="table" >
  
  <thead style={{backgroundColor: "pink"}}>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Select </th>
      {/*<span><input type="checkbox"  style={{width : "20px"}} /></span>*/ }
      
    </tr>
  </thead>
  
  <tbody>
    {/* maping start*/}
{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 
    <tr>
      
      <td>{data.firstName} {data.lastName}</td>
      <td>{data.email}</td>
      <td><input type="checkbox"  value={data.id}
      name="this.state.id" onChange={this.handleusers}
      style={{width: "20px"}}></input></td>
    </tr>
    
 ) } ) }

 {/* maping end*/}
    
  </tbody>
  
</table>
</div>


          </div>


          </div>
          </form>
        </div>
      
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
export default Notification