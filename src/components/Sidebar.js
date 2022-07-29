// eslint-disable-next-line
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class sidebar extends React.Component{
  
  render(){
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.href = "/";
    };
        return(
            <div>
                 <div id="sidebar-wrapper">
              
              <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
                  <br/><br/>
                  <div class="logo">
                      <img src="/assets/images/logo.png" alt=""/>
                  </div>
                  <br/><br/>
        
                  <li id="">
                      <a href="http://localhost:3000/Superadminlogin"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/Dashboard.png"  alt=""/></span> Dashboard</a>
                      
                    </li>
                  
                <li>
                  <a href="/Supervendormanagement"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/order management.png" alt=""/></span> Super Vendor Management</a>
                  
                </li>
                <li>
                  <a href="/Branchvendormanagement"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/Branch Management.png"alt=""/></span>Branch Vendor Management</a>
                </li>
                <li>
                  <a href="/Usermanagement"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/Branch Management.png"alt=""/></span>User Management</a>
                </li>
                <li>
                  <a href="/Recipemanagement"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/order management.png"  alt=""/></span>Recipe Management </a>
                </li>
                <li>
                  <a href="/Supervendorlist/Product Management"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/order management.png"  alt=""/></span>Product Management </a>
                </li>
                {/* <li>
                  <a href="/Productassignment"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/order management.png"  alt=""/></span>Product Assignment </a>
                </li> */}
                
                {/* <li > 
                
                  <a href="Supervendorlist"  class="nav-link dropdown-toggle"  aria-expanded="false" style={{marginLeft: "-10px"}} > <span class="fa-stack fa-lg pull-left"><img src="/assets/images/product management.png"  alt=""/></span>Product Management</a>
                  <ul class="nav-pills nav-stacked" style={{listStyleType: "none"}}>
            <li><a href="Supervendorlist">Product Assignment</a></li>
            
          </ul>
          
               </li>*/}
        
                <li>
                  <a href="/Campsupervedorlist"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/Campaign & Promotion.png"  alt=""/></span>Campaign & Promotion</a>
                </li>
                <li>
                  <a href="/Overallstatics"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/sales management.png" alt=""/></span>Sales Management</a>
                </li>
                <li>
                  <a href="/Notification"><span class="fa-stack fa-lg pull-left"><img src="/assets/images/notification.png" alt=""/></span>Send Notification</a>
                </li>
                <li>
                  <a href="" onClick={handleLogout}><span class="fa-stack fa-lg pull-left"><img src="/assets/images/logout.png" alt=""/></span>Logout</a>
                </li>
              </ul>
            </div>
</div>
        )
    }
}

export default sidebar