import './style.css'
import event_bg from '/pages/event.gif'
import EventCard from '../../Components/EventCard'
import BGElement from '../../Components/BGElement'
import { events } from '../../utils/events'

const Events = () => {
  return (
    <div className='home-container'>
      <BGElement bg={event_bg} />
      <div className='events-title'>
        <span>
          <h1>Events</h1>
        </span>
      </div>
      <div className='events-card-container'>
        <div className='event-cards'>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
