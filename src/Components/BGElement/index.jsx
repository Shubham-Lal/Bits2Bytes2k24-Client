import './style.css'

export default function BGElement({ bg }) {
  return (
    <div className='home-bg'>
      <div
        className='home-bg-img'
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
      </div>
      <div className='bg-blur-layer'></div>
    </div>
  )
}
