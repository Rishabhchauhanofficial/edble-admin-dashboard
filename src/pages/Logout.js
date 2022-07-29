// eslint-disable-next-line
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Logout extends React.Component{
   
 
    render(){
        return(
            <div>
                <h1>You Have Been Logout </h1>
                <div class="container">
                <Link to="/"><button style={{backgroundColor: "red", color : "white", marginLeft: "440px", borderRadius: "25px", width: "250px", height: "45px"}}>Login again</button></Link>
                </div>

            </div>
        )
    }
}
export default Logout
