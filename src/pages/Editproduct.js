// eslint-disable-next-line
import React, {Component} from 'react';
import "./addbranchvendor.scss";
import uploadimg from './Upload-Icon-PNG-Image.png';
import {Redirect} from 'react-router-dom';
class Editproduct extends React.Component{

  
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
                
                  <h1 style={{ color: 'red'}}> <b>Product Management</b></h1>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col" ><  img src="assets/images/back_button.png" style={{width: '35px', marginTop: '-5px', marginLeft: '-5px'}} onClick={this.props.history.goBack} /></div>
                 
                </div>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row" style={{backgroundColor: '#444444', borderRadius: '25px', height: '250px', width: '1000px', marginLeft: '20px'}}>
                
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
              </div>
              <br />
            </div>
            <form>
              <div className="row">
                <div className="col" id="nm">
                  <input type="text" placeholder="coca cola" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
                <div className="col" id="nm">
                  <input type="text" placeholder="pepsi" style={{ border: "0",
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
                  <input type="text" placeholder="Price" style={{ border: "0",
  outline: "0",
  fontSize: "25px",
  background: "transparent",
  borderBottom: "1px solid rgb(126, 126, 126)",
 fontWeight: "50px", 
 height: "40px",}}/>
                </div>
                <div className="col" id="nm">
                  <input type="text" placeholder="500gm" style={{ border: "0",
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
                <label  for="inputState" style={{marginLeft: "0px", fontSize: "25px"}}>Select Category</label>
                <select id="inputState" class="form-control" style={{width: "350px", fontSize: "22px", height: "45px"}}>
                <option selected>Drink</option>
                <option>Western</option>
                <option>dddd</option>
                <option>Local</option>
                <option>Desert</option>
                </select>
                </div>
                <div className="col" id="nm">
                <label  for="inputState" style={{marginLeft: "0px", fontSize: "25px"}}>Select Sub Category</label>
                <select id="inputState" class="form-control" style={{width: "350px", fontSize: "22px", height: "45px"}}>
                <option selected>Northen</option>
                <option>Western</option>
                <option>Drink</option>
                <option>Local</option>
                <option>Desert</option>
                </select>
                </div>
              </div>
              
              <button id="btnn" type="button" className="btn btn-danger">Save Detail</button>
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
export default Editproduct;