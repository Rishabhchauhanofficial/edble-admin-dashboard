// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class Ingridientsadd extends React.Component{
  

  constructor(props){
    super(props)
    
   
    this.state = { 
        formValues: [{ id: "", quantity : "" }],
        data: []
      };
     
      

    
  }
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { id: "", quantity : "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  savedetails=()=>{

    
    const sendingdata={
      recipeId: this.props.match.params.id,
      items: this.state.formValues
    }
    
    console.log(sendingdata)

    const token = localStorage.getItem('accessToken');
      const headers = { 
  
       'Content-Type': 'application/json',
        Authorization: `${token}`
       }

       
        axios.post('http://3.14.168.174/add-ingredient',
           
            sendingdata
,{headers})
  
         
           
          .then(response => {
            if (response.data.code === 200) {
         
      
              // console.log(recipeid)
      
               swal("Success", response.data.message, "", {
                 buttons: false,
                 timer: 5000,
               })
               .then((value) => {
                window.location.href = "/Recipemanagement";
               
        
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
            .get("http://3.14.168.174/item", {headers})
            .then((response) => {
               
                this.setState({ data: response.data.data});
                
                
            })
            .catch((error) => console.error(`Error:  ${error}`));
            
        }
     
      
        handleSubmit = event => {

          const token = localStorage.getItem('accessToken');
          const headers = { 
      
           'Content-Type': 'application/json',
            Authorization: `${token}`
           }
          event.preventDefault();
      
          const user = {
            quantity: this.state.quantity,
            id: this.state.id

          };
          console.log(user)
      
          axios.post(`http://3.14.168.174add-ingredient`, {headers},{ user })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        }
       
        
   
  render(){
     
    const { data } = this.state;
        return(

            
            <div>
               
                <div className="respo">
          <nav className="navbar navbar-default no-margin">
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
          <div class="container">
              <div class="row justify-content-center">
                
                  <h1 style={{ color: 'red'}}> <b>Recipie Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="/assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                  <div class="col">
                    <h1 style={{marginLeft: '-60px', marginRight: '-100px', marginTop: '-2px'}}><b></b></h1>
                  </div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">

           
             {/* <div className="row" style={{backgroundColor: '#444444', borderRadius: '25px', height: '250px', width: '1000px', marginLeft: '20px'}}>
                
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
                    
                  
                    <input id="file-input" type="file"/>
                  </div>
              </div>*/}
              <br />
            </div>
        
              
              <h1>Ingredients</h1>
    
              <div class="container">
    <div class="row">
    <form >
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index} style={{marginLeft: "500px"}} >
              <label style={{fontSize: "25px"}}>Ingredient Name : </label>
              <select name="id" onChange={e => this.handleChange(index, e)} style={{fontSize:"25px", width: "300px", marginLeft: "15px", marginTop: "-45px"}} class="form-select selectpicker" id="select-country" aria-label="Default select example">
  <option selected>Select Item</option>
   {/* maping start*/}
{ data.map((data, length) => { 
  

  // Constant.ids = data.id

  return(
  
  <option value={data.id} key={data.id}>
{data.name}

  </option>

  
 ) } ) }

 {/* maping end*/}

</select><br/>
              <label style={{fontSize: "25px"}}>Ingridient Quantity :</label>
              <input type="text" name="quantity"  onChange={e => this.handleChange(index, e)} style={{fontSize:"25px"}} />
              
              
              

              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{background: "yellow", color: "black", borderRadius: "25px", marginLeft: "50px"}}>Remove</button> 
                : null
              }
              <hr style={{marginLeft: "-350px"}}/>
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()} style={{background: "green", color: "white",height: "30px", width: "100px", borderRadius: "25px", marginLeft: "450px", fontSize: "15px"}}><b>Add +1</b></button>

          </div>
      </form>



    </div>
    </div>

    <button id="btnn" type="button" onClick={this.savedetails} className="btn btn-danger">Save Detail</button>


            
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
export default Ingridientsadd;