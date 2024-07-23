import './style.css'
import contact_bg from '/pages/contact.png'
import BGElement from '../../Components/BGElement/BGElement'

const Contact = () => {
  return (
    <div className='home-container'>
      <BGElement bg={contact_bg} />
      <div>Events</div>
    </div>
  )
}

export default Contact
