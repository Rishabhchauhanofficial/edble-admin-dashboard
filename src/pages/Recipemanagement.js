// eslint-disable-next-line
import React, {Component} from 'react';
import "./recipemanagement.scss";
import { useHistory } from 'react-router-dom';
import {Redirect,Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button'





class Recipemanagement extends React.Component{

 
  state = { data: [],data2: []};

  
  componentDidMount(){

    const token = localStorage.getItem('accessToken');
    const headers = { 

     'Content-Type': 'application/json',
      Authorization: `${token}`
      
     }
  //    const response = axios
  //           .get("http://3.14.168.174/super_market/get-meals", {headers})
  //           .then((response) => {
               
  //               this.setState({ data: response.data.data});
  //           })
  //           .catch((error) => console.error(`Error:  ${error}`));
  //            const id = this.props.match.params.id;
  //          const url= "http://3.14.168.174/getRecipeByMeal/"+{id};
  //          console.log(url)
  //           const response2 = axios
  //           .get(url, {headers})
  //           .then((response) => {
             
  //             console.log(response.data.data)
  //               this.setState({ data: response.data.data});
  //           })
  //           .catch((error) => console.error(`Error:  ${error}`));
  
  const reqOne = axios.get("http://3.14.168.174/super_market/get-meals",{headers});
const reqTwo = axios.get("http://3.14.168.174/getRecipeByMeal/12",{headers});

axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  console.log(responseOne.data.data)
  this.setState({ data: responseOne.data.data});
  this.setState({ data2: responseTwo.data.data});
})).catch(errors => {
  // react on errors.
})
   }

  

    render(){

      
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };
      const { data,data2 } = this.state;
     
      
      
        return(
            <div>
                        <div className="respo">
          <nav c0lassName="navbar navbar-default no-margin">
            <div className="navbar-header fixed-brand">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
                <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
              </button>
              <a className="navbar-brand" href="#"><img src="assets/images/logo.png" alt="" style={{width: '130px'}} /></a>
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
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Recipie Management</b></h1>
              
              </div>
              <div className="container">
              <div class="row">
              <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                
                <div class="col">
               <Link >   {['left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip style={{backgroundColor: "orange"}} id={`tooltip-${placement}`}>
        First Select The Category
        </Tooltip>
      }
    >
      <Button className="btn btn-danger" style={{ borderRadius: "25PX", fontSize: '25', marginLeft: '650px' }} variant="secondary">Create Recipe</Button>
    </OverlayTrigger>
  ))}</Link>
                  </div>
                  
                </div>
                </div>
              
            </div>
            
            <br />
            <div className="container" style={{marginLeft: "25px", marginRight: "25px"}}>
            <div className="row" >
            <Slider {...settings}>
              {/* maping start*/}
{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 

              
            <a href={"/Recipemanagementcat/"+data.id}>  <div  key={data.id} className="col" >
              <p style={{textAlign: "center"}}><img src={data.image} style={{borderRadius: "50px", boxShadow: "0px 6px 29px 3px rgba(0,0,0,1)", marginLeft: "50px",marginRight: "50px",width: "50px", height: "50px", marginTop: "50px"}}/></p>
              <p style={{textAlign: "center" , fontSize: "15px"}}><b>{data.name}</b></p>
              </div>
              </a>
) } ) }

</Slider>
                         </div></div>
            
                         <br/> <br/> <div className="row">
              <div className="col">
                <br />
                <table className="table" id="tablecon">
                  <thead className="table-head">
                    <tr>
                      <th scope="col">Recipe Name</th>
                      <th scope="col" ><span style={{float: 'right'}}>Details &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  { data2.map((data, length) => { 
  

  // Constant.ids = data.id

  return( 
                    <tr>
                   
                      <td>{data.name}</td>
                      <td id="vde"><span style={{float: 'right'}}><a href={"/Viewrecipie/"+12+"/"+length} style={{textDecoration: 'none'}}>View Details <img src="assets/images/arrow-view-details.png" alt="" /></a></span></td>
                      
                    </tr>
                    ) } ) }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
        {/* /#wrapper */}
        {/* jQuery */}
        {/*Container Main end*/}</div>
        )
    }
    }
    export default Recipemanagement
