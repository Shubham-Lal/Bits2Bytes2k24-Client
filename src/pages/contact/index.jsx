import './style.css'
import contact_bg from '/pages/contact.png'
import ContactCard from '../../Components/ContactCard'
import BGElement from '../../Components/BGElement'

const contactDetails = {
  photo: '/images/home-bg.jpg',
  name: 'Jay Prakash Sharma',
  profession: 'GDSC BIT Lead and Web Developer',
  socials: ['ln', 'gh', 'x', 'sof'],
}
const Contact = () => {
  return (
    <div className='home-container'>
      <BGElement bg={contact_bg} />
      <div className='contacts-container'>
        <div className='convenors-container'>
          <div className='convenor-title'>
            <h1>Convenors</h1>
          </div>
          <div className='convenor-cards'>
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
          </div>
        </div>
        <div className='technical-team-container'>
          <div className='tech-team-header'>
            <h1>Technical Team</h1>
          </div>
          <div className='tech-team-cards'>
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
            <ContactCard details={contactDetails} />
          </div>
        </div>
        <div className='location-container'>
          <div className='google-map-cont'>
            <h1>Location</h1>
            <div></div>
          </div>
          <div className='address-container'>
            <p className='college-name'>Bengal Institute of Technology</p>
            <p className='college-address'>
              Address: 1 no. Govt Colony(on Basanti Highway),Kolkata-700150,
              West Bengal, India
            </p>
            <p className='college-phone'>Phone no: +91 33-23458004</p>
            <p className='college-website'>Website:http://bitcollege.in.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
