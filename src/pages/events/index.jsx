import './style.css'
import event_bg from '/pages/events.png'
import BGElement from '../../Components/BGElement/BGElement'

const Events = () => {
  return (
    <div className='home-container'>
      <BGElement bg={event_bg} />
      <div>Events</div>
    </div>
  )
}

export default Events
