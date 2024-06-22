import React from 'react'
import './Galleryitem.css'

function Galleryitem({image,title}) {
  return (
    <div className='gallery-container'>
        <div className='image-container '>
            <img src={image} height="200px" width="200px"  alt="" />
        </div>
        <div className='gallery-title'>{title}</div>
    </div>
  )
}

export default Galleryitem
