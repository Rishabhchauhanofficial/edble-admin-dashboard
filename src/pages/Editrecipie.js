// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
class Editrecipie extends React.Component{

  constructor(props){
    super(props)
    
   
    this.state = { 
        formValues: [{ Igname: "", email : "" }]
      };
     
      

    
  }
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { name: "", email: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  savedetails=()=>{
    console.log(this.state.formValues)
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
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
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
            <form>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="Name" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}/>
                </div>
                <div className="col" id="nm">
                  <input type="text" placeholder="Brand" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
  fontWeight: "50px", 
  height: "40px",}}/>
                </div>
              </div>
              <div className="row">
               
                <div className="col" id="nm">
                  <input type="text" placeholder="Total Quantity Available" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
              </div>
              <h1>Discription</h1>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" style={{fontSize: "25px", width:"1000px", marginLeft: "30px"}}></textarea>
              <br/>
              
    <table class="table">
  <thead style={{backgroundColor: "pink"}}>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="assets/images/foodie.jpg" style={{width: "100px", borderRadius: "20px"}}/>
      <br/></th>
      <td>Cup roll</td>
      <td>500gm</td>
      
    </tr>
    <tr>
      <th scope="row"><img src="assets/images/foodie.jpg" style={{width: "100px", borderRadius: "20px"}}/><br/></th>
      <td>Cup roll</td>
      <td>500gm</td>
      
    </tr>
    <tr>
      <th scope="row"><img src="assets/images/foodie.jpg" style={{width: "100px", borderRadius: "20px"}}/><br/></th>
      <td>Cup roll</td>
      <td>500gm</td>
      
    </tr>
  </tbody>
</table>
              <h1>Ingredients</h1>
    
<div class="container">
    <div class="row">
    <form >
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index} style={{marginLeft: "500px"}} >
              <label style={{fontSize: "25px"}}>Ingredient Name : </label>
              <input type="text" name="Igname"  onChange={e => this.handleChange(index, e)} style={{fontSize:"25px"}} /><br/>
              <label style={{fontSize: "25px"}}>Ingridient Quantity :</label>
              <input type="text" name="Igquantity"  onChange={e => this.handleChange(index, e)} style={{fontSize:"25px"}} />
              
              <br/><br/><input type="file" style={{marginLeft: "35px"}}/>
              

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
export default Editrecipie;