import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header =() => {
    return(
        
        <nav className="navbar navbar-dark navbar-expand-lg container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand brand">Fd</Link>
        </div>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar" name="button">
          <span className="navbar-toggler-icon"></span>
        
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">

          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link nlink">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link nlink">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link nlink">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Download" className="nav-link nlink">Download</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/Login" className="nav-link nlink"><i className="fa fa-user" aria-hidden="true"></i> Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" className="nav-link nlink"><i className="fa fa-sign-out" aria-hidden="true"></i> Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Header;