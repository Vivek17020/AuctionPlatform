import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header-Container'>
        <nav className='navbar'>
          <ul className='header'>
            
            <li><Link to="/" className='header-content'>HOME</Link></li>
            <li><Link to="/about" className='header-content'>DeclareAuctionResult
            </Link></li>
            <li><Link to="/contact" className='header-content'>Winner</Link></li>
            <li><Link to="/services" className='header-content'>MaxBidValue</Link></li>
            <li><Link to="/howbuysell" className='header-content'>RollBack</Link></li>
            <li><Link to="/Signup" className='header-content'>Register</Link></li>
            <li><Link to="/Login" className='header-content'>Login</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default Header