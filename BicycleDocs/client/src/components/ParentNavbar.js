import React from 'react';
const ParentNavBar=()=>{

    return(
        <div>
           
            <nav className="navbar navbar-parent navbar-expand-lg" >
                <a className="navbar-brand" href="*">
                Parent Portal
                  
                  <i className='fas fa-child'></i>
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
              
               <a className="nav-item nav-link nav-link-parent"  href="/children">Manage Children</a>
               <a className="nav-item nav-link nav-link-parent"  href="/lookup-school">Register</a>
               <a className="nav-item nav-link nav-link-parent"  href="*">Orders</a>
               <a className="nav-item nav-link nav-link-parent"  href="*">Account</a>
       </div>

               

        </div>


               
                
                
                
            </nav>

        </div>
    )

}

export default ParentNavBar;