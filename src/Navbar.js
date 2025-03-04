import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-menu'>
        <div>
          <div className='navbar-icon'/>
          {/* <img src="/icons/settings.png" alt="Settings Icon" className="navbar-icon" /> */}
        </div>
        <div className='navbar-item'>
          <a href='#projects' className='navbar-link'> projects </a>
        </div>
        <div className='navbar-item'>
          <a  href='#publications' className='navbar-link'> publications </a>
        </div>
        <div className='navbar-item'>
          <a href='#about' className='navbar-link'> about me </a>
        </div>
      </div>
    </div>
  )
}

