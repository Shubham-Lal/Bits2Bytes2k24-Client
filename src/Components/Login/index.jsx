import './style.css'

export default function Login () {
  console.log('got called')
  return (
    <div className='signup-form-container'>
      <div className='signup-title'>
        <h1>Login</h1>
      </div>
      <form className='signup-form'>
        <div className='form-input input-email'>
          <input type='text' placeholder='Your Email' />
        </div>
        <div className='form-input input-pass'>
          <input type='password' placeholder='Password' />
        </div>
      </form>
    </div>
  )
}
