import React from 'react'
import './Notifyitem.css'
export default function Notifyitem({date,link,Heading}) {
  return (
    <div class='notify'>
        <div className='notify-date'>{date}</div>
        <div className='notify-link'>
            <a href={link} className='link'>{Heading}</a>
        </div>
    </div>
  )
}
