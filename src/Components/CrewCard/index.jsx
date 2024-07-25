import './style.css'

export default function CrewCard ({ detail }) {
  return (
    <div className='crew-card'>
      <div className='crew-img'>
        <img src='/images/home-bg.jpg' />
      </div>
      <div className='crew-about'>
        <div className='crew-name'>
          <p>{detail.name}</p>
        </div>
        <div className='crew-role'>
          <p>{detail.role}</p>
        </div>
        <div className='crew-socials'>
          {detail.socials.map((social, index) => (
            <p>{social}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
