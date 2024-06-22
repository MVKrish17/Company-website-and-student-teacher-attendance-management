import React from 'react'
import image1 from '../Assets/logo.jpeg'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <img class="navimg" src={image1} alt="logo" width="100px" height="80px"/>
      <div class="navitems">
        <a href="">HOME</a>
        <a href="#">NOTIFICATIONS</a>
        <a href="" target="_self">EVENTS</a>
        <a href="#">LOGIN/SIGNUP</a>
        <a href="#">SUPPORT</a>
      </div>
    </div>
  )
}

export default NavBar
