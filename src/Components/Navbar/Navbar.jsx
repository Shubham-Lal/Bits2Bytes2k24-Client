import './style.css'
import { NavLink } from 'react-router-dom'
const navlinks = [
  { tag: 'Home', to: '/' },
  { tag: 'About', to: '/about' },
  { tag: 'Events', to: '/events' },
  { tag: 'Contact', to: '/contact' },
  { tag: 'Crew', to: '/crew' },
  { tag: 'Gallery', to: '/gallery' },
  { tag: 'Register', to: '/register' },
]

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <span>
            <img src='./images/logo.png' alt='bits2bytes-logo' />
          </span>
          <span>Bits2Bytes 2k24</span>
        </div>
        <div className='navbar-links'>
          <ul className='navbar-links-container'>
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to}>{link.tag}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
