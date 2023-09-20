import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return <>
      
  <nav className="navbar navbar-expand-lg fw-bolder text-uppercase fixed-top">

  <div className="container">

    <Link  className="navbar-brand" to="/Home">Start FremWork </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="/Portofolio">Portofolio</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li> 
      
      </ul>
    </div>
  </div>

</nav>
    </>
    

  }
}
