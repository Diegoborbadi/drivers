import React from 'react'
import{Link} from "react-router-dom"
import "./navbar.style.css"



const Navbar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        <img src="/F1.svg" alt="logo" />
      </div>
      <div className='navbar-cont-links'>
        <Link className='navbar-links' to="/home">Home</Link>
        <Link className='navbar-links' to="/create">Crear</Link>
      </div>
      <div className='navbar-cont-search'>
        <input type="text" />
      </div>
    </div>
  )
}

export default Navbar
