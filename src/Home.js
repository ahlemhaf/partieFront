import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">home</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{marginLeft :'auto'}}>
            <li className="nav-item">
            <Link className="nav-link"to="/register">Register</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
            
         
          </ul>
        </div>
      </div>
   
    </nav>
    
  )

}

export default Home