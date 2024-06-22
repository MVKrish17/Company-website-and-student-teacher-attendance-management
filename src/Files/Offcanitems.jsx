import React from 'react'
import './Offcanitems.css'


function Offcanitems({notify_image,notify_name}) {
    return (
        <>
            <div className='off_menu'>
                <img style={{ border: "2px white solid" }} src={notify_image} alt="logo" height="15px" width="15px"></img>
                <div>{notify_name}</div>
            </div>
        </>
    )
}

export default Offcanitems
