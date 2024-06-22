import React from 'react'
import './Addnotify.css'
function Addnotifications() {
  return (
    <div class="addnotify">
      <div class="enterd">
        <div>
           <b class="tag">Notification Date</b>
        </div>
        <div><input capture class="in" type="text"></input></div>
      </div>
      <div class="enterm">
        <div>
            <b class="tag">Add Notification</b>
        </div>
        <div><textarea class="in" rows={2} cols={4}></textarea></div>
      </div>
      <div><button type='button' class="but">UPLOAD</button></div>
    </div>
  )
}

export default Addnotifications
