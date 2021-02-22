import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardLayout from './dashBoardLayout/Dashboard';


const Controller=()=>{
return(
  <BrowserRouter>
    <DashboardLayout>
      this is dashboard
    <Switch>
      <Route/>
    </Switch>
    </DashboardLayout>
  </BrowserRouter>
)
}
export default Controller;