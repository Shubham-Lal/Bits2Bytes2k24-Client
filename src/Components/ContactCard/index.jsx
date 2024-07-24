import './style.css'
import { Link } from 'react-router-dom'

export default function ContactCard({ details }) {
  return (
    <div className='convenor-item'>
      <div className='convenor-img-cont'>
        <img src={details.photo} alt='Convenor photo' />
      </div>
      <div className='convenor-detail'>
        <p className='convenor-name'>{details.name}</p>
        <p className='convenor-profession'>{details.profession}</p>
        <div className='convenor-socials'>
          {details.socials.map((social, index) => (
            <Link className='social-link' key={index} to={social.link}>
              <p>{social}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
