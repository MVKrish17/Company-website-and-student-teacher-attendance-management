import React from 'react'
import './Support.css'
function Support() {
  return (
    <div className='supportbody'>
        <div className="inside">
            <div className='d1'>
                <div className='contact'>Contact DSS</div>
                <div className='app'>We appreciate your interest in DSS.Please select from the option below</div>
            </div>
            <div className='d2'>
                <div className='in'>
                    <div className='inq'>General Inquiries</div>
                    <div className='inq1'>9848221321</div>
                </div>
                <div className='find'>
                    <div className='inq2'>Find our office Location</div>
                    <div className='inq11'>
                        <ol type='1'>
                            <li><a href="https://maps.app.goo.gl/kNe1zr1CGpNXGkNE6" target="_blank">DSS Marikivalasa</a></li><br/>
                            <li><a href="https://maps.app.goo.gl/5vnULX7jdNXMhPMMA" target='_blank'>DSS NSRIT</a></li><br/>
                            <li><a href="">DSS DwarakaNagar</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>For more queries</div>
        </div>
    </div>
  )
}

export default Support