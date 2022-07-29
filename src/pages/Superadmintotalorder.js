// eslint-disable-next-line
import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import "./superadmin.scss";
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


// const token = localStorage.getItem('accessToken');




class Superadmintotalorder extends React.Component{
  

  constructor(props) {
    super(props);

    this.state = {
     
        totaluser: "loading...",
        totalorder: "loading...",
        totalActivePramotation: "loading...",
        totalSales: "loading...",
        vendorid: this.props.data
    };
   
}

  componentDidMount() {
    // GET request using fetch with set headers
    const token = localStorage.getItem('accessToken');
    const headers = { 'Content-Type': 'application/json',
      Authorization: `${token}`
     }
    fetch('http://3.14.168.174/super-admin/dashboard/user', { headers })
        //.then(response => response.json())
        //.then(data => this.setState({ totalReactPackages: data.total }));
        .then(response => response.json())
        .then(data => this.setState({ 
          
          totaluser: data.totalUser,
          totalorder: data.totalOrder,
          totalActivePramotation: data.totalActivePramotation,
          totalSales: data.totalSales
          
        }));
       
        
}

    render(){
    
      const { totaluser,totalorder,totalActivePramotation,totalSales } = this.state;
        return(
          
          
            <div>
           

             
              <body>
        <div class="respo">
        <nav class="navbar navbar-default no-margin">
          
          <div class="navbar-header fixed-brand">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
              <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt="" style={{marginLeft: '950px', marginTop: '35px'}}/></a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <button class="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span></button>
              </li>
            </ul>
          </div>
        </nav>
    </div>
        <div id="wrapper">
          
         {/*          */}
         
          <div id="page-content-wrapper">
          <div class="container">
              <div class="row justify-content-center">
                
                  <h1 style={{ color: 'red'}}> <b>Super Market Dashboard </b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}}  /></div>
                  <br/><br/><br/>
                </div>
                
              </div>
            </div>
            
            <div class="container">
              
                <div class="row">
                    
                 <div class="col border border-white" style={{backgroundColor: 'rgb(255, 219, 219)', borderRadius: '10px' ,margin: "30px" ,width: "50px", height: "200px" }}><Link to="Superadmin" style={{textDecoration: "none"}}><>
                    <div class="row" style={{ boxShadow: '2px 2px 4px #0000004f', height: '50px', marginLeft: '10px', marginTop: '10px', borderRadius: '20px',  background: 'rgb(255,51,0)', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', width: '60px' }} > <img  src="assets/images/Total User.png" alt="" style={{height: '40px', marginTop: '3px', marginLeft: '1px'}}/></div>
                  <p class="h4" style={{marginTop: '40px', marginLeft: '15px', color: 'rgb(135, 135, 135)'}} ><b>Total User </b></p>
                  <p class="h1" style={{ marginLeft: '15px', color: 'rgb(0, 162, 32)'}}><b>{totaluser}</b></p>
                  
                 <i style={{color: "black",marginLeft: '170px', marginTop: '10px', marginBottom: '20px'}} class="fa fa-arrow-right fa-2x"  aria-hidden="true"></i></></Link></div>
                  
                 <div class="col border border-danger border-4" style={{backgroundColor: 'rgb(255, 219, 219)', borderRadius: '10px' ,margin: "30px" ,width: "50px", height: "200px" }}><Link to="Superadmintotalorder" style={{textDecoration: "none"}}><>
                    <div class="row" style={{ boxShadow: '2px 2px 4px #0000004f', height: '50px', marginLeft: '10px', marginTop: '10px', borderRadius: '20px',  background: 'rgb(255,51,0)', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', width: '60px' }} > <img  src="assets/images/Total Order.png" alt="" style={{height: '40px', marginTop: '3px', marginLeft: '1px'}}/></div>
                  <p class="h4" style={{marginTop: '40px', marginLeft: '15px', color: 'rgb(135, 135, 135)'}} ><b>Total Order </b></p>
                  <p class="h1" style={{ marginLeft: '15px', color: 'rgb(0, 162, 32)'}}><b>{totalorder}</b></p>
                  
                 <i style={{color: "black",marginLeft: '170px', marginTop: '10px', marginBottom: '20px'}} class="fa fa-arrow-right fa-2x"  aria-hidden="true"></i></></Link></div>
                  
                  
                 <div class="col border  border-white" style={{backgroundColor: 'rgb(255, 219, 219)', borderRadius: '10px' ,margin: "30px" ,width: "50px", height: "200px" }}><Link to="Superadmintotalap" style={{textDecoration: "none"}}><>
                    <div class="row" style={{ boxShadow: '2px 2px 4px #0000004f', height: '50px', marginLeft: '10px', marginTop: '10px', borderRadius: '20px',  background: 'rgb(255,51,0)', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', width: '60px' }} > <img  src="assets/images/Total Order.png" alt="" style={{height: '40px', marginTop: '3px', marginLeft: '1px'}}/></div>
                  <p class="h4" style={{marginTop: '40px', marginLeft: '15px', color: 'rgb(135, 135, 135)'}} ><b>Total Active Promotion </b></p>
                  <p class="h1" style={{ marginLeft: '15px', color: 'rgb(0, 162, 32)'}}><b>{totalActivePramotation}</b></p>
                  
                 <i style={{color: "black",marginLeft: '170px', marginTop: '10px', marginBottom: '20px'}} class="fa fa-arrow-right fa-2x"  aria-hidden="true"></i></></Link></div>
                  
                  
                 <div class="col border border-white" style={{backgroundColor: 'rgb(255, 219, 219)', borderRadius: '10px' ,margin: "30px" ,width: "50px", height: "200px" }}><Link to="Superadmintotalsales" style={{textDecoration: "none"}}><>
                    <div class="row" style={{ boxShadow: '2px 2px 4px #0000004f', height: '50px', marginLeft: '10px', marginTop: '10px', borderRadius: '20px',  background: 'rgb(255,51,0)', background: 'linear-gradient(0deg, rgba(255,51,0,0.9416141456582633) 0%, rgba(255,77,77,1) 100%)', width: '60px' }} > <img  src="assets/images/Total Order.png" alt="" style={{height: '40px', marginTop: '3px', marginLeft: '1px'}}/></div>
                  <p class="h4" style={{marginTop: '40px', marginLeft: '15px', color: 'rgb(135, 135, 135)'}} ><b>Total Sales </b></p>
                  <p class="h1" style={{ marginLeft: '15px', color: 'rgb(0, 162, 32)'}}><b>{totalSales}</b></p>
                  
                 <i style={{color: "black",marginLeft: '170px', marginTop: '10px', marginBottom: '20px'}} class="fa fa-arrow-right fa-2x"  aria-hidden="true"></i></></Link></div>
                  

                  
                  
                 
                </div>
              </div>
              <div class="row">
                  <div class="col" style={{ marginLeft: '950px', marginTop: '35px'}}>
                <button type="button" class="btn btn-warning" style={{borderRadius: '15px'}}><h2>Apply Filter</h2></button>
            </div> 
            </div>
            <br/>
            <div class="row">
              <div class="col" id="graph" >
                <Bar
                data={{
                  labels: ['January', 'Feburary', 'March', 'April', 'May', 'June','July', 'August', 'September','Octuber','November','December'],
        datasets: [{
            label: '# of Vials',
            data: [500,800,250,300,850,500,1500,650,700,850,980,400],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 6,
            borderRadius: Number.MAX_VALUE,
            hoverBackgroundColor: 'green',
            
              
        }] 
                }}

                
                height={100}
                width={400}
                borderRadius='0px'
                options={{scales: {
                  y: {
                      beginAtZero: true
                  }
              }}}
                />
                

              </div>
            </div>
      </div>
            </div>
            
</body>




</div>
    
            )
        }}
        
    
    export default Superadmintotalorder