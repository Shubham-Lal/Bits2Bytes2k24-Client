import './style.css'
import home_bg from '/images/home-sim.gif'
import BGElement from '../../Components/BGElement'

const Home = () => {
  return (
    <div className='home-container'>
      <BGElement bg={home_bg} />
      <div className='home-blur-layer'>
        <div className='home-hero-container'>
          <div className='hero-left-container'>
            <div className='hero-left-text'>
              <p>The journey of technological innovation</p>
              <div className='hero-moving-txt-cont'>
                <p>starts with ideation</p>
                <p>
                  progresses through development culminates in the impact on
                  society
                </p>
              </div>
              <div className='hero-explore-btn-cont'>
                <button>Explore Events</button>
              </div>
            </div>
          </div>
          <div className='hero-right'>
            <div className='hero-right-bubbles-cont'>
              <div className='hero-right-centroid'>
                <img
                  className='bubble-center-logo'
                  src='/images/bubble_center.png'
                  alt='bits 2 bytes logo in a bubble'
                />
                <img
                  className='bubble-random-mov bubble-1'
                  alt='image of bubble moving randomly'
                  src='/images/bubble_cropped.png'
                />
                <img
                  className='bubble-random-mov bubble-2'
                  alt='image of bubble moving randomly'
                  src='/images/bubble_cropped.png'
                />
                <img
                  className='bubble-random-mov bubble-3'
                  alt='image of bubble moving randomly'
                  src='/images/bubble_cropped.png'
                />
                <img
                  className='bubble-random-mov bubble-4'
                  alt='image of bubble moving randomly'
                  src='/images/bubble_cropped.png'
                />
                <img
                  className='bubble-random-mov bubble-5'
                  alt='image of bubble moving randomly'
                  src='/images/bubble_cropped.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
