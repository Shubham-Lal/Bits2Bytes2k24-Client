import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

export default function Signup () {
  const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    phone: '',
    roll: '',
    college: '',
    stream: '',
    year: '',
    password: '',
    rePassword: ''
  })
  function handleSignUP (e) {
    console.log('got input')
    e.preventDefault()
    if (userData.password != userData.rePassword) {
      alert('Password Doesnt not match..')
    } else {
      console.log(userData)
    }
  }
  function handleChange (e) {
    const { name, value } = e.target
    setUserData(prevValue => ({ ...prevValue, [name]: value }))
  }
  return (
    <div className='signup-form-container'>
      <div className='signup-title'>
        <h1>Register</h1>
      </div>
      <form className='signup-form' onSubmit={handleSignUP}>
        <div className='form-input'>
          <input
            type='text'
            name='fullname'
            value={userData.fullname}
            onChange={handleChange}
            placeholder='Your Fullname'
            required
          />
        </div>
        <div className='form-input'>
          <input
            type='text'
            name='email'
            value={userData.email}
            onChange={handleChange}
            placeholder='Your Email'
            required
          />
        </div>
        <div className='form-input'>
          <input
            type='text'
            name='phone'
            value={userData.phone}
            onChange={handleChange}
            placeholder='Your Phone Number'
            required
          />
        </div>
        <div className='form-input'>
          <input
            type='text'
            name='roll'
            value={userData.roll}
            onChange={handleChange}
            placeholder='University Roll Number'
            required
          />
        </div>

        <div className='form-select-container'>
          {/* Dropdown  for college */}
          <div className='select-input-cont input-college'>
            <select
              className='select-college'
              name='college'
              value={userData.college}
              onChange={handleChange}
              id='college-select'
              required
            >
              <option value=''>College</option>
              <option value='bit'>BIT</option>
              <option value='other'>Other</option>
            </select>
          </div>
          {/* Dropdown  for stream */}
          <div className='select-input-cont input-stream'>
            <select
              className='select-year'
              name='stream'
              value={userData.stream}
              onChange={handleChange}
              id='stream-select'
              required
            >
              <option value=''>Stream</option>
              <option value='cse'>CSE</option>
              <option value='it'>IT</option>
              <option value='bt'>BT</option>
              <option value='ece'>ECE</option>
              <option value='aiml'>{'CSE(AI/ML)'}</option>
              <option value='other'>Other</option>
            </select>
          </div>
          {/* Dropdown  for year */}
          <div className='select-input-cont input-year'>
            <select
              className='select-year'
              name='year'
              value={userData.year}
              onChange={handleChange}
              id='year-select'
              required
            >
              <option value=''>Year</option>
              <option value='1'>1st</option>
              <option value='2'>2nd</option>
              <option value='3'>3rd</option>
              <option value='4'>4th</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </div>
        <div className='form-input'>
          <input
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
        </div>
        <div className='form-input'>
          <input
            type='password'
            name='rePassword'
            value={userData.rePassword}
            onChange={handleChange}
            placeholder='Retype Password'
            required
          />
        </div>

        <div className='create-btn'>
          <button type='submit'>Create Account</button>
        </div>
        <div className='other-action-cont'>
          <span> Already have an account? </span>
          <Link className='login-action' to='/login'>
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}
