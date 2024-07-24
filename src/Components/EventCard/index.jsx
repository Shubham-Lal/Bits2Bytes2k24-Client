import { Link } from 'react-router-dom'
import './style.css'

export default function EventCard({ event }) {
  return (
    <div className='card-container'>
      <div className='card-poster-cont'>
        <img src='/images/home-bg.jpg ' alt='event poster' />
      </div>
      <div className='card-title-constainer'>
        <h3 className='event-title'>{event.title}</h3>
      </div>
      <div className='card-type-container'>
        <p className='event-type'>{event.type}</p>
      </div>
      <div className='card-link-container'>
        <Link className='card-link' to={event.link}>
          Learn More
        </Link>
      </div>
    </div>
  )
}
