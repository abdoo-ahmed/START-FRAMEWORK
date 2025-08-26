import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  
  return <>
  <nav className="navbar py-4 navbar-expand-lg naf">
  <div className="container fw-bold">
    <Link  className="navbar-brand text-white lin1" to= "StartFramework">START FRAMEWORK </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className=" nav-item">
          <Link className="li1 nav-link active me-3 text-white" aria-current="page"to= "about" >ABOUT</Link>
        </li>
        <li className=" nav-item">
          <Link className="li1 nav-link me-3 text-white" to= "Portfolio" >PORTFOLIO</Link>
        </li>
        <li className=" nav-item">
          <Link className="li1 nav-link me-3 text-white" to= "Contact" >CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
}
