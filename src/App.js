// eslint-disable-next-line
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Superadminlogin from './pages/Superadminlogin';
import Recipemanagementcat from './pages/Recipemanegementcat';
import Superadmin from './pages/Superadmin';
import Supervendormanagement from './pages/Supervendormanagement';
import Addsupervendor from './pages/Addsupervendor';
import Supervendermanagementdetails from './pages/Supervendermanagementdetails';
import Branchorderdetails from './pages/Branchorderdetails';
import Employeeditprofile from './pages/Employeeditprofile';
import Vendoredit from './pages/Vendoredit';
import Addbranchvendor from './pages/Addbranchvendor';
import Employeeorderdetails from './pages/Employeeorderdetails';
import Foodcompleteongoingorder from './pages/Foodcompleteongoingorder';
import Recipemanagement from './pages/Recipemanagement';
import Nofound from './pages/Nofound';
import Addemployee from './pages/Addemployee';
import Addmanager from './pages/Addmanager';
import Logout from './pages/Logout';
import Branchvendormanagement from './pages/Branchvendormanagement';
import Editrecipe from './pages/Editrecipie';
import { Link } from 'react-router-dom';
import {BrowserRouter ,Router,Route,Switch} from 'react-router-dom';
import Viewrecipie from './pages/Viewrecipie';
import Branchvendirdetailsmain from './pages/Branchvendirdetailsmain';
import Branchvendoremployee from './pages/Branchvendoremployee';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Supervendorlist from './pages/Supervendorlist';
import BranchVendorlist from './pages/BranchVendorlist';
import Addproduct from './pages/Addproduct';
import Addcategories from './pages/Addcategories';
import Addsubcategories from './pages/Addsubcategories';
import Productassignment from './pages/Productassignment';
import Assignmentproduct from './pages/Assignmentproduct';
import Productsdisplay from './pages/Productsdisplay';
import Editcampdi from './pages/Editcampdi';
import Ingridientsadd from './pages/Ingridientsadd'
import Editproduct from './pages/Editproduct';
import Campsupervedorlist from './pages/Campsupervedorlist';
import Campbranchvendorlist from './pages/Campbranchvendorlist';
import Createacampaign from './pages/Createacampaign';
import Camptypepro from './pages/Camptypepro';
import Camptypecate from './pages/Camptypecate';
import Automaticnotification from './pages/Automaticnotification';
import offersdi from './pages/offersdi';
import Offersde from './pages/Offersde';
import Notification from './pages/Notification';
import Overallstatics from './pages/Overallstatics';
import Supervendorstatics from './pages/Supervendorstatics';
import Branchvendorstatics from './pages/Branchvendorstatics';
import Supervendorstatsdata from './pages/Supervendorstatsdata';
import BranchVendorstatsdata from './pages/BranchVendorstatsdata';
import Addperticularproduct from './pages/Addperticularproduct';
import Superadmintotalorder from './pages/Superadmintotalorder';
import Superadmintotalap from './pages/Superadmintotalap';
import Superadmintotalsales from './pages/Superadmintotalsales';
import Usermanagement from './pages/Usermanagement';
import Branchvendormanager from './pages/Branchvendormanager';
import Usersorders from './pages/Usersorders';
import Foodongoingorder from './pages/Foodongoingorder';
import Foodincomingorder from './pages/Foodincomingorder';
import Createrecipie from './pages/Createrecipie';
import Editcapm from './pages/Editcapm';
import Productsdisplayid from './pages/Productsdisplaybyid';
import Branchorderdetailsonging from './pages/Branchorderdetailsonging';
import Branchorderdetailscomplete from './pages/Branchorderdetailscomplete';





function App() {

  const token = localStorage.getItem('accessToken');

 
  if(!token) {
   
    console.log(token);
    return <Superadminlogin/>
  }
  



  return (
    <div>
      

      <Sidebar/>

<BrowserRouter>
<Notifications />
        <Switch>
        
        <Route path='/Superadmin' component={Superadmin} />
        <Route path='/Supervendormanagement' component={Supervendormanagement} />
        <Route path='/Usersorders/:id' component={Usersorders} />
        <Route path='/Addsupervendor' component={Addsupervendor} />
        <Route path='/Supervendermanagementdetails/:id' component={Supervendermanagementdetails} />
        <Route path='/Recipemanagementcat/:id' component={Recipemanagementcat} />
        <Route path='/Ingridientsadd/:id' component={Ingridientsadd} />
        <Route path='/Branchorderdetails/:id' component={Branchorderdetails} />
        <Route path='/Employeeditprofile' component={Employeeditprofile} />
        <Route path='/Vendoredit/:id' component={Vendoredit} />
        <Route path='/Addbranchvendor/:id' component={Addbranchvendor} />
        <Route path='/Employeeorderdetails' component={Employeeorderdetails} />
        <Route path='/Foodcompleteongoingorder/:id/:branchid/:fname/:lname/:email/:phone' component={Foodcompleteongoingorder} />
        <Route path='/Recipemanagement' component={Recipemanagement} />
        <Route path='/Productsdisplayid/:id' component={Productsdisplayid} /> 
        <Route path='/Addemployee/:id' component={Addemployee} />
        <Route path='/AddManager/:id' component={Addmanager} />
        <Route path='/Logout' component={Logout} />
        <Route path='/Viewrecipie/:id/:index' component={Viewrecipie} />
        <Route path='/Editrecipe' component={Editrecipe} />
        <Route path='/Automaticnotification' component={Automaticnotification} />
        <Route path='/Branchvendormanagement' component={Branchvendormanagement} />
        <Route path='/Branchvendirdetailsmain/:id/:id2' component={Branchvendirdetailsmain} />
        <Route path='/Branchvendoremployee/:id/:name/:address' component={Branchvendoremployee} />
        <Route path='/Supervendorlist/:id' component={Supervendorlist} />
        <Route path='/BranchVendorlist' component={BranchVendorlist} />
        <Route path='/Addproduct/:id' component={Addproduct} />
        <Route path='/Addcategories' component={Addcategories} />
        <Route path='/Addsubcategories' component={Addsubcategories} />
        <Route path='/Createrecipie/:id' component={Createrecipie} />
        <Route path='/Productassignment' component={Productassignment} />
        <Route path='/Assignmentproduct' component={Assignmentproduct} />
        <Route path='/Productsdisplay/:id' component={Productsdisplay} />
        <Route path='/Editproduct' component={Editproduct} />
        <Route path='/Editcampdi/:id/:campid' component={Editcampdi} />

        <Route path='/Campsupervedorlist' component={Campsupervedorlist} />
        <Route path='/Campbranchvendorlist' component={Campbranchvendorlist} />
        <Route path='/Createacampaign/:id' component={Createacampaign} />
        <Route path='/Camptypepro/:id' component={Camptypepro} />
        <Route path='/Camptypecate/:id' component={Camptypecate} />
        <Route path='/offersdi/:id/:is' component={offersdi} />
        <Route path='/Offersde/:id/:is' component={Offersde} />
        <Route path='/Usermanagement' component={Usermanagement} />
        <Route path='/Overallstatics' component={Overallstatics} />
        <Route path='/Supervendorstatics' component={Supervendorstatics} />
        <Route path='/Branchvendorstatics' component={Branchvendorstatics} />
        <Route path='/Supervendorstatsdata/:id' component={Supervendorstatsdata} />
        <Route path='/BranchVendorstatsdata/:id' component={BranchVendorstatsdata} />
        <Route path='/Notification' component={Notification} />
        <Route path='/Addperticularproduct' component={Addperticularproduct} />
        <Route path='/Superadmintotalorder' component={Superadmintotalorder} />
        <Route path='/Superadmintotalap' component={Superadmintotalap} />
        <Route path='/Superadmintotalsales' component={Superadmintotalsales} />
        <Route path='/Branchvendormanager/:id/:name/:address' component={Branchvendormanager} />
        <Route path='/Foodongoingorder/:id/:branchid/:fname/:lname/:email/:phone' component={Foodongoingorder} />
        <Route path='/Foodincomingorder/:id/:branchid/:fname/:lname/:email/:phone' component={Foodincomingorder} />
        <Route path='/Createrecipie' component={Createrecipie} />
        <Route path='/Editcapm/:id/:campid' component={Editcapm} />
        <Route path='/Branchorderdetailsonging/:id' component={Branchorderdetailsonging} />
        <Route path='/Branchorderdetailscomplete/:id' component={Branchorderdetailscomplete} />
        <Route path='/' component={Superadmin} />
        
        <Route  component={Nofound} />
        </Switch>
      </BrowserRouter>


    </div>

   );
} 

export default App;
