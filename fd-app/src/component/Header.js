import React from 'react';
// import {Link} from 'react-router-dom';
import './Header.css';

const Header =() => {
    return(
        
        <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="navbar-header">
          <a href="/" className="navbar-brand brand">Fd</a>
        </div>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar" name="button">
          <span className="navbar-toggler-icon"></span>
        
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">

          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link nlink">Home</a>
            </li>
            <li className="nav-item">
              <a href="/Contact" className="nav-link nlink">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/About" className="nav-link nlink">About</a>
            </li>
            <li className="nav-item">
              <a href="/Download" className="nav-link nlink">Download</a>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/Login" className="nav-link nlink"><i class="fa fa-user" aria-hidden="true"></i> Login</a>
            </li>
            <li className="nav-item">
              <a href="/Signup" className="nav-link nlink"><i class="fa fa-sign-out" aria-hidden="true"></i> Signup</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Header;