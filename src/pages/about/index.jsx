import './style.css'
import about_bg from '/pages/about.png'
import BGElement from '../../Components/BGElement'
const About = () => {
  return (
    <div className='home-container'>
      <BGElement bg={about_bg} />
      <div className='about-title'>
        <span>
          <h1>About Us</h1>
        </span>
      </div>
      <div className='about-card-container'>
        <div className='about-cards'>
          <div className='about-header-img'>
            <img src='/pages/about-header.png' alt='About page header image' />
          </div>
          <div className='about-desc-container'>
            <p className='about-desc'>
              Bits2bytes 2024 is the annual technical festival of Bengal
              Institute of Technology. This fest consists of events that include
              competitions, exhibitions, lectures as well as workshops and a
              short film competition as well. It has been providing a platform
              for the students community to develop and showcase their technical
              prowess. The events in here are designed in such a way that, it
              makes any geek's day. It will be a day to remember.
            </p>
            <p>
              Year after year, Bits-2-Bytes explores the various aspects of
              science and technology and the profound impacts they have on our
              lives. Bits2Bytes 2024 is the enthralling 1-day grandeur of an
              event which will be jam packed with a plethora of things having 20
              events with prize money. This alluring creativity arena take its
              throne in the event named Aerostrom and our college is the only
              college after IIT which gives you the chance to witness this
              spectacular mega event. Besides this, the fun continues in the
              events like Fifa-14, BGMI making it a complete package. This 17th
              edition of Bits2bytes, rack your mind , create,innovate ,implement
              and make your mark at this technological extravaganza.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
