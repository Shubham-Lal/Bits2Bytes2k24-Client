import './style.css'
import BGElement from '../../Components/BGElement'
import CrewCard from '../../Components/CrewCard'
import crew_bg from '/pages/crew.gif'
const webcard = {
  name: 'Jay Prakash Sharma',
  role: 'Web Developer and Co-ordinator',
  socials: ['gh', 'in', 'x']
}
const Crew = () => {
  return (
    <div className='home-container'>
      <BGElement bg={crew_bg} />
      <div className='crew-title'>
        <span>
          <h1>Crew</h1>
        </span>
      </div>
      <div className='events-card-container'>
        <div className='crew-cards-container'>
          <div className='crew-website-container'>
            <div className='website-team-header'>
              <h1>Website Team</h1>
            </div>
            <div className='web-team-cards'>
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
            </div>
          </div>
          <div className='crew-website-container'>
            <div className='website-team-header'>
              <h1>Core Members</h1>
            </div>
            <div className='web-team-cards'>
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
              <CrewCard detail={webcard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
