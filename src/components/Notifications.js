import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Notifications extends Component {

  constructor(props){
    super(props);

    this.state={
      countifnoti: ""
    }
  }
  componentDidMount(){

    
   
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }

    axios.get('http://3.14.168.174/notifications/33',{headers})
    .then((resp)=>{

      if(resp.data.data == 0){
        this.setState({countifnoti: null})
      }
      else{
      this.setState({countifnoti: resp.data.data})
      }
    })
    .catch((err)=>{

    })


  
  
  }

  refresh =()=>{
    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }
    
    axios.get('http://3.14.168.174/getNotification/33' ,{headers})
    .then((resp)=>{
  
      ///refresh
      console.log("check refresh")
      
    })
    .catch((err)=>{
  
      console.log(err)
    })

  }
  render() {
    return (<>     <div  onClick={this.refresh}style={{   marginLeft: "1250px", marginTop: "20px", position: "absolute", zIndex: "999"}}> <a href="/Automaticnotification" style={{textDecoration: "none"}}><img  style={{width: "40px"} } src='https://teckhubsolutions.com/assets/img/request/gettyimages-1318101432-2048x2048.jpg'/> <span><h4 style={{ marginTop: "-42px",marginLeft: "15px",fontSize: "20px",  color: "black", }} zindex={1} > &nbsp;&nbsp;&nbsp;&nbsp;<b>{this.state.countifnoti}</b> </h4></span><br/></a></div></>

    )
  }
}
