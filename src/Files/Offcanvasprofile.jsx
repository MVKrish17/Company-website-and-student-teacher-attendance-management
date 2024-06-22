import React from 'react'
import "./Offcanvasprofile.css"
function Offcanvasprofile({pimage,pname}) {
  return (
    <div className='upper'>
        <img src={pimage} alt="logo" height="100px" width="160px"></img>
        <div class="name">{pname}</div>
    </div>
  )
}

export default Offcanvasprofile
