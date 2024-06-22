import React from 'react'
import EventItem from './Eventitem'
import image3 from '../Assets/hackathon.jpg'
import image4 from '../Assets/project.png'
import image5 from '../Assets/independance.jpg'
import Galleryitem from './Galleryitem'
import image6 from '../Assets/one.jpeg'
import image7 from '../Assets/two.jpeg'
import image8 from '../Assets/three.jpeg'
import image9 from '../Assets/four.jpeg'
import './Events.css'
function Events() {
    return (
        <div className='events'>
            <div className='heading'>
                <div className='our-events'>Our Events</div>
                <div className='event-items'>
                    <EventItem image={image3} title="DSS Hackthon" link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" />
                    <EventItem image={image4} title="DSS Project" link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" />
                    <EventItem image={image5} title="Independance day" link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" />
                    <EventItem image={image3} title="DSS Hackthon" link="https://www.figma.com/file/fXEVROLCKHulcNK41iCSvp/DSS-WEBSITE?type=design&node-id=0-1&mode=design&t=SNRwAqaNFcV6fgsI-0" />
                </div>
            </div>
            <div class="gallery">
                <div class="head">Gallery</div>
                <div class='gallery-items'>
                    <Galleryitem image={image6} title="Inauguration"></Galleryitem>
                    <Galleryitem image={image7} title="Infrastructure"></Galleryitem>
                    <Galleryitem image={image8} title="Office"></Galleryitem>
                    <Galleryitem image={image9} title="Development Team"></Galleryitem>
                </div>
            </div>
        </div>
    )
}

export default Events
