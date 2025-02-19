import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 3 + '%'}} src="https://infoviaan.com/resources/images/Untitled-1.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
             <NavLink className="nav-item" to="/create"> Create Record </NavLink>
        </li>
        </ul>
       </div>
       </div>
     </nav>
   </div>
 );
}