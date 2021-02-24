import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import "./_dashboardLayout.scss";
import {BiHomeAlt} from "react-icons/bi";
import {BsPeople} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {AiOutlineCalendar} from "react-icons/ai";
import {HiOutlineChartSquareBar} from "react-icons/hi";
import {VscGraph} from "react-icons/vsc";
const navItems=[
  {
     name:"Dashboard",
     icon:<BiHomeAlt className="svg-icon"/>,
     link:"/"
  },
  {
    name:"Recruitment",
    icon:<BsPeople className="svg-icon"/>,
    link:"/Recruitment"
 },
 {
 name:"Onboarding",
 icon:<VscGraph className="svg-icon"/>,
 link:"/Onboarding"
},
 {
  name:"Report",
  icon:<HiOutlineChartSquareBar className="svg-icon"/>,
  link:"/Report"
},
 {
  name:"Calender",
  icon:<AiOutlineCalendar className="svg-icon"/>,
  link:"/Calender"
},
 {
  name:"Settings",
  icon:<FiSettings className="svg-icon"/>,
  link:"Setting"
}
]

const DashboardLayout=({children})=>{
  const location=useLocation();
  return(
    <div className="dashboard-layout">
      <nav className="side-nav-bar">
         <div className="logo-container">
           <h3>NEWTON HR</h3>
         </div>
         <div className="nav-container">
         {navItems.map((navItem,index)=>(
           <Link to={navItem.link} key={index}>
            <div key={index} className={`nav-icon ${navItem.link===location.pathname ? "selected" : ""}`}>
               {navItem.icon}
               <label className="item-name">{navItem.name}</label>
            </div>
            </Link>
         ))}
         </div>
         <div className="nav-image-container">
            Add here svg image
         </div>
      </nav>
      <div className="main-container">
        {children}
      </div>
    </div>
  )
}
export default DashboardLayout;