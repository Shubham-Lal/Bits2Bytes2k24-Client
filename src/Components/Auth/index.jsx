import BGElement from '../../Components/BGElement'
import { Outlet } from 'react-router-dom'
import './style.css'
import signup_bg from '/pages/signup.gif'

export default function Auth () {
  return (
    <div className='home-container'>
      <BGElement bg={signup_bg} />
      <div className='outlet-container'>
        <div className='outlet-position-cont'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
