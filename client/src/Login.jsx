import React from 'react'
import "./register.css"
import {Link} from "react-router-dom"



function Login() {
  return (
    <div className='bg-container'>
    <div className='card-container'>
      <div className='heading'>
        <h1 className='main-heading'>Login</h1>
      </div>
      
      <form action=''>
      <div className='input-element'>
        <label htmlFor='email' className='input'>E-mail:</label>
        <input type="email" id="email" placeholder='E-mail' className='input-text'/>
      </div>
      <div className='input-element'>
        <label htmlFor='password' className='input'>Password:</label>
        <input type="password" id="password" placeholder='********' className='input-text' />
      </div>
      <div className='button-element'>
        <button className='button'>Login</button>
      </div>
      </form>
      <br/>
      <p className='login-para'>Not Registered?</p>
      <div className='button-element'>
      <Link to="/register" className='button-login' ><button className='button-login'>Sign Up</button></Link>
       </div>
    </div>
  </div>
      
  )
}

export default Login