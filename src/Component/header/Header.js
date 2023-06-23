import React from 'react'
import "./header.css"
import MSP_LOGO from "./../../Photo/msp.png" ; 

const Header = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src={MSP_LOGO} alt='Logo' />
        <a href='/' style={{textDecoration : "none"}}><h2>MSP Tech Club</h2></a>
      </div>
      <div className='links'>
      <a  href={"/userlist"}  style={{textDecoration : "none"}}>
        <button>User List</button>
      </a>
      </div>
    </nav>
  )
}

export default Header
