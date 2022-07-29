// eslint-disable-next-line
import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class Viewrecipie extends React.Component{

constructor(props){
  super(props);

  this.state={

    recipe: [],
    ingredients: []
  
  }
}

componentDidMount(){

  const index=this.props.match.params.index;
  const id= this.props.match.params.id;
  const token = localStorage.getItem('accessToken');
  const headers = { 

   'Content-Type': 'application/json',
    Authorization: `${token}`
    
   }
  axios
  .get("http://3.14.168.174/getRecipeByMeal/"+id,{headers})
  .then((resp)=>{

    
    this.setState({recipe: resp.data.data[index]});

    this.setState({ingredients: resp.data.data[index].ingredients})


  })
  .catch((err)=>{

    console.log(err)

  })
}

x=()=>{
console.log(this.state.ingredients);
}
  
    render(){
     // const {ingredients}=this.state;
     // const recipe=this.state;
      
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
                <h1 style={{marginLeft: '0px', color: 'red'}}> <b>Recipie Management
                  
                </b></h1>
              
              </div>
              <div class="row">
                <div class="col">
                <img style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} src="/assets/images/back_button.png" onClick={this.props.history.goBack} />
                </div>
                
                <div class="col">
                <Link to="/Editrecipe"><button 
                type="button"
                className="btn btn-danger"
                style={{ borderRadius: "25PX", fontSize: '15', marginLeft: '650px'  }}
              >
                Edit Recipie
              </button></Link>
                  </div>
                 
                </div>
              
            </div>
            
            <br />
            <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
            <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px'}}>{this.state.recipe.name} </h1>
            </div>
            <br/><br/><br/>
            <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
           
              <h1 style={{textAlign: 'left', marginLeft: '0px', marginTop: '20px'}}>{this.state.recipe.note_details}</h1>
              
              
            </div>
            <br/>
           
            <br/><br/>
            <div className="row" style={{boxShadow: '1px 1px 6px #9E9E9E', borderRadius: '5px'}}>
               
            <h1 style={{textAlign: 'left', marginLeft: '20px', marginTop: '20px'}}><b>Ingredients</b></h1>
            
            <table class="table">
  <thead style={{backgroundColor: "pink"}}>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    
    
    {
      this.state.ingredients.map((data,index)=>{
        return(
          <tr>
           
      <th scope="row"><img src={data.image} style={{width: "100px", borderRadius: "20px"}} alt={data.name}/>
      </th>
     
      <td>{data.name}</td>
      <td> {data.quantity}</td>
      
    </tr>
        )
        

      })


    }
    
  </tbody>
</table>              
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
    export default Viewrecipie
