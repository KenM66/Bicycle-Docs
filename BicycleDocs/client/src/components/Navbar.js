import React from "react";
import {useDispatch} from "react-redux"
import { logoutUser } from "../actions/UserActions";
import 'font-awesome/css/font-awesome.min.css';

export default function Navbar() {

  const currentUser= JSON.parse(localStorage.getItem('currentUser'))

  const dispatch= useDispatch()



  return (
    <div>
      <nav className="navbar navbar-expand-lg" >
        <a className="navbar-brand" href="/">
            BICYCLE DOCS
            <i className="fas fa-bicycle"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       
        <div className="navbar-nav ms-auto">

            {!currentUser ?(


<div className="navbar-nav ms-auto">
  
<a className= "nav-item nav-link" href="/parent-registration">
  Parent Registration
</a>

<a className= "nav-item nav-link" href="/parent-login">
  Parent Login
</a>

<a className="nav-item nav-link" href="/school-login">
  School Login
</a>
<a className="nav-item nav-link" href="/organization-registration">
 
 Register Your School
</a>

</div>
     
):(

<div>

  <a className="nav-item nav-link" onClick={()=>{dispatch(logoutUser())}}>Logout</a>

</div>

)}
            
          </div>
        </div>
      </nav>
    </div>
  );
}
