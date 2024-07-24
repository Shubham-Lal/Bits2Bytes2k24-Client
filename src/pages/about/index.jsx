import './style.css'
import about_bg from '/pages/about.png'
import BGElement from '../../Components/BGElement'
const About = () => {
  return (
    <div className='home-container'>
      <BGElement bg={about_bg} />
      <div>Events</div>
    </div>
  )
}

export default About
