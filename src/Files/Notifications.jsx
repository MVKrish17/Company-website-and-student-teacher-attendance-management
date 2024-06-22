import React from 'react'
import './Notifications.css'
import Notifyitem from './Notifyitem'
function Notifications() {
  return (
    <div class="notify-container">
      <div class='ntitle'>NOTIFICATIONS</div>
      <div class='notify-elements'>
        <Notifyitem date={"19-12-2025"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Hackathon round 1 results released for Batch-3"} />
        <Notifyitem date={"18-12-2023"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Student enrolment for Full Stack Web Developer intern has opened  "} />
        <Notifyitem date={"17-12-2023"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Internship certificates for Batch2 have been released.Students can get them at their profile  "} />
        <Notifyitem date={"16-12-2023"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Dss Student have got placed in Microsoft with 50LPA "} />
        <Notifyitem date={"15-12-2023"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Tomorrow is declared as a holiday in the view of bandh "} />
        <Notifyitem date={"14-12-2023"} link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" Heading={"Dss is going to conduct mock interviews tomorrow "} />
      </div>
      <div class="pages">
        <button class='button' onclick="#" type="button">Prev</button>
        <button class='button' onclick="#" type="button"> 1 </button>
        <button class='button' onclick="#" type="button"> 2 </button>
        <button class='button' onclick="#" type="button"> 3 </button>
        <button class='button' onclick="#" type="button"> 4 </button>
        <button class='button' onclick="#" type="button"> 5 </button>
        <button class='button' onclick="#" type="button"> Next </button>
      </div>
    </div>
  )
}

export default Notifications
