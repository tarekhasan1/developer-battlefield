import React from "react";

function Header(){
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Statistics</a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Applied Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Blog</a>
        </li>
      </ul>
      <button>Start Applying</button>
    </div>
  </div>
</nav>
        </>
    )
};

export default Header;