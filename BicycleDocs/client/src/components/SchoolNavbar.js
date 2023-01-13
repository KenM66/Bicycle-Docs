


const SchoolNavbar = ()=>{

    const currentUser= JSON.parse(localStorage.getItem('currentUser'))

    return(
        <div>
           
            <nav className="navbar navbar-school navbar-expand-lg" >
                <a className="navbar-brand" href="*">
                SCHOOL PORTAL
                    <i className="fas fa-school"></i>
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
              
               <a className="nav-item nav-link nav-link-school"  href="/seasons">Manage Seasons</a>
               <a className="nav-item nav-link nav-link-school"  href="*">Subscription</a>
               <a className="nav-item nav-link nav-link-school"  href="*">Account</a>
       </div>

               

        </div>


               
                
                
                
            </nav>

        </div>
    )

}

export default SchoolNavbar;