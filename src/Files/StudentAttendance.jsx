import React from 'react'
import './StudentAttendance.css'
import Tableitem from './Tableitem.jsx'
import Offcanvas from './Offcanvasprofile.jsx'
import Offcanitems from './Offcanitems.jsx'
import pro from '../Assets/user.png'
import att from "../Assets/att.png"
import per from "../Assets/perform.png"
import './Admin.css'


function StudentAttendance() {
    return (
        <div className='main'>
            <div className='offcan'>
                <div className='offcan1'>
                    <Offcanvas pimage={pro} pname="Bala Manikanta"/>
                </div>
                <div className='offcan2'>
                    <Offcanitems  notify_image={att} notify_name="My Attendance" />
                    <Offcanitems  notify_image={per} notify_name="My Performance" />
                </div>
            </div>
            <div className='studentAttendance'>
                <div className='name1'>My Attendance</div>
                <div className='report'>
                    <div class="date-place">Date:27-12-2023</div>
                    <div className='attendance-container'>
                        <table>
                            <tr>
                                <th class="le"></th>
                                <td><b>NAME</b></td>
                                <td><b>EMAIL</b></td>
                                <td><b>PRESENT</b></td>
                                <td><b>ABSENT</b></td>
                            </tr>
                            <Tableitem name="hello" mail="iubfbn123@gmail.com" ></Tableitem>
                            <Tableitem name="hello" mail="iubfbn123@gmail.com" ></Tableitem>
                            <Tableitem name="hello" mail="iubfbn123@gmail.com" ></Tableitem>
                            <Tableitem name="hello" mail="iubfbn123@gmail.com" ></Tableitem>
                            <Tableitem name="hello" mail="iubfbn123@gmail.com" ></Tableitem>
                        </table>
                    </div>
                    <div class='bottom-bar'>
                        <button type="button" className='Done'>DONE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentAttendance