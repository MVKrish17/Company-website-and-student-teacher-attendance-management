import React from 'react'
import './Eventitem.css'

function Eventitem({image,title,link}) {
  return (
    <div className='event-container'>
        <div className='image-container '>
            <img src={image} height="280px" width="220px"  alt="" />
        </div>
        <div className='event-title'>{title}</div>
        <a href={link} className='learn'>Learn More!</a>
    </div>
  )
}

export default Eventitem
