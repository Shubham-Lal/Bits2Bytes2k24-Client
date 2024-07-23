import './style.css'
import home_bg from '/images/home-sim.gif'

const Home = () => {
  return (
    <div className='home-container'>
      <div
        className='home-bg'
        // style={{
        //   backgroundImage: `url(${home_bg})`,
        // }}
      />
      <div className='home-blur-layer'></div>
    </div>
  )
}

export default Home
