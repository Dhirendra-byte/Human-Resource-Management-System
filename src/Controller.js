import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardLayout from './dashBoardLayout/Dashboard';
import Home from './screen/Home/Home';
import Recruitment from './screen/Recruitment/Recruitment';


const Controller=()=>{
return(
  <BrowserRouter>
    <DashboardLayout>
    <Switch>
      <Route exact path="/" render={(props)=><Home{...props}/>}/>
      <Route path="/Recruitment" render={(props)=><Recruitment{...props}/>}/>
    </Switch>
    </DashboardLayout>
  </BrowserRouter>
)
}
export default Controller;