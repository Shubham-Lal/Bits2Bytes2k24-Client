import React from 'react'
import './style.css'
import EventDetail from '../../Components/EventDetail'
import { Outlet, useParams } from 'react-router-dom'
import BGElement from '../../Components/BGElement'
import { eventDescription } from '../../utils/eventDesc'

export default function SpecificEvent() {
  const { type } = useParams()
  const bgURL = `/events/${type}.png`
  return (
    <div className='home-container'>
      <BGElement bg={bgURL} />
      <div className='specific-event-title'>
        <span>
          <h1>{type}</h1>
        </span>
      </div>
      <div className='events-card-container'>
        <div className='event-cards'>
          <EventDetail detail={eventDescription} />
        </div>
      </div>
    </div>
  )
}
