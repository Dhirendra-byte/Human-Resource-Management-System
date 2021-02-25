import React from 'react';
import "./_header.scss";
import Input from "../input/Input";

const Header=({pageheader})=>{
  return(
    <header className="header">
    <div className="page-head">
      <h1>{pageheader}</h1>
    </div>
    <div>
    <Input/>
    </div>
    </header>
  )
}
export default Header