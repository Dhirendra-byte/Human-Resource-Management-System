import React from 'react';
import "./_dashboardLayout.scss"

const DashboardLayout=({children})=>{
  return(
    <div className="dashboard-layout">
      <nav className="side-nav-bar">
         this is nav
      </nav>
      <div className="main-container">
        here are children
        {children}
      </div>
    </div>
  )
}
export default DashboardLayout;