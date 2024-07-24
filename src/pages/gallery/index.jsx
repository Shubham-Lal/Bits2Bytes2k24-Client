import BGElement from '../../Components/BGElement'
import './style.css'
import gallery_bg from '/pages/gallery.gif'

const Gallery = () => {
  return (
    <div className='home-container'>
      <BGElement bg={gallery_bg} />
      <div className='events-title'>
        <span>
          <h1>Memories</h1>
        </span>
      </div>
      <div className='events-card-container'>
        <div className='gallery-cards'>
          <div className='gallery-image'>
            <img src='/images/home-bg.jpg' alt='a gallery photo' />
          </div>
          <div className='gallery-image'>
            <img src='/images/home-bg.jpg' alt='a gallery photo' />
          </div>
          <div className='gallery-image'>
            <img src='/images/home-bg.jpg' alt='a gallery photo' />
          </div>
          <div className='gallery-image'>
            <img src='/images/home-bg.jpg' alt='a gallery photo' />
          </div>
          <div className='gallery-image'>
            <img src='/images/home-bg.jpg' alt='a gallery photo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
