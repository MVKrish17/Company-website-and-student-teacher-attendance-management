import React from 'react'
import './Admin.css'
import "./StudentAttendance.css"
import Tableitem from './Tableitem'
import Offcanvas from './Offcanvasprofile.jsx'
import Offcanitems from './Offcanitems.jsx'
import pro from '../Assets/user.png'
import att from "../Assets/att.png"
import per from "../Assets/perform.png"


function Admin() {
  return (
    <div className='adminmain'>
      <div className='offcan'>
          <div className='offcan1'>
              <Offcanvas pimage={pro} pname="Bala Manikanta"/>
          </div>
          <div className='offcan2'>
              <Offcanitems  notify_image={att} notify_name="My Attendance" />
              <Offcanitems  notify_image={per} notify_name="My Performance" />
          </div>
      </div>
      <div className='admin'>
        <div class='wow'>
          <div className='top-bar'>
            <div class="date-place">Date:27-12-2023</div>
            <div class="options">
              <button className="a" type="button">ENABLE</button>
              <button className="b" type="button">DISABLE</button>
              <button className="c" type="button">SELECT ALL</button>
            </div>
          </div>
          <div className='attendance-container'>
            <table>
              <tr>
                <th class="le"></th>
                <td><b>NAME</b></td>
                <td><b>EMAIL</b></td>
                <td><b>PRESENT</b></td>
                <td><b>ABSENT</b></td>
              </tr>
              <Tableitem name="adihqd" mail="bqdkj54256367@yahoo.com"></Tableitem>
              <Tableitem name="adihqd" mail="bqdkj54256367@yahoo.com"></Tableitem>
              <Tableitem name="adihqd" mail="bqdkj54256367@yahoo.com"></Tableitem>
              <Tableitem name="adihqd" mail="bqdkj54256367@yahoo.com"></Tableitem>
              <Tableitem name="adihqd" mail="bqdkj54256367@yahoo.com"></Tableitem>
            </table>
          </div>
          <button class="b1" type="button">SHARE</button>
        </div>
      </div>
    </div>
  )
}

export default Admin
