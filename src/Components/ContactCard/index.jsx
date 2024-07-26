import './style.css'
import { Link } from 'react-router-dom'
import Skeleton from '../Skeleton'

const ContactCard = ({ details }) => {
  return (
    <div className='convenor-item'>
      <div className='convenor-img-cont'>
        <img src={details.photo || '/images/home-bg.jpg'} alt='Convenor photo' />
      </div>
      <div>
        <p className='convenor-name'>{details.c_name}</p>
        <p>{details.profession || 'Currently under development'}</p>
        <div className='convenor-socials'>
          {['ln', 'gh', 'x', 'sof'].map((social, index) => (
            <Link className='social-link' key={index} to={social.link}>
              <p>{social}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const ContactCardLoading = () => (
  <div className='convenor-item'>
    <div className='convenor-img-cont'>
      <Skeleton />
    </div>
    <div>
      <Skeleton className='my-4 h-[28.8px]' />
      <Skeleton className='h-[48px]' />
      <div className='convenor-socials'>
        <Skeleton className='social-link' />
        <Skeleton className='social-link' />
        <Skeleton className='social-link' />
        <Skeleton className='social-link' />
      </div>
    </div>
  </div>
)

export { ContactCard, ContactCardLoading }