import { Link } from 'react-router-dom'
import './style.css'

export default function EventDetail({ detail }) {
  return (
    <div className='event-detail-container'>
      <div className='detail-poster'>
        <img src={detail.poster} alt='event poster' />
      </div>
      <div className='detail-desc-container'>
        <h1 className='detail-title'>{detail.title}</h1>
        <p className='detail-about'>{detail.about}</p>
        <p className='detail-participation'>
          Number of Participants: {detail.participants}
        </p>
        <div className='detail-register-btn'>
          <Link className='detail-register' to='register'>
            Register
          </Link>
        </div>
      </div>
      <div className='detail-cordinators-cont'>
        <h2 className='cordinators-heading'>Co-ordinators:</h2>
        <div className='cordinators-name'>
          {detail.coordinators.map((cor, index) => (
            <div key={index}>
              <p>{cor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
