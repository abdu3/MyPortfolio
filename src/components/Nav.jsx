import React from 'react'
import logo from "../images/myLogo.png"
export default function Nav() {
  return (
    <div className='container-md'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className='logo-image' src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SKILLS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >PROJECT</a>
                </li>
                <li className="ms-4 nav-item">
                  <a className="nav-link btn btn btn-contact" href="#" >CONTACT ME</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}
