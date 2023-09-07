import React from 'react'
import { PiHandWavingBold} from "react-icons/pi";
import "./register.css"
import { Link } from 'react-router-dom';


function Register() {
  return (
   
    <div className='bg-container'>
      <div className='card-container'>
        <div className='heading'>
          <h1 className='main-heading'>Hi,Welcome</h1>
          <PiHandWavingBold className='icon'/>
        </div>
        
        <form action=''>
        <div className='input-element'>
          <label htmlFor='username' className='input' >Username:</label>
          <input type="text" id="username" placeholder='username' className='input-text'/>
        </div>
        <div className='input-element'>
          <label htmlFor='email' className='input'>E-mail:</label>
          <input type="email" id="email" placeholder='E-mail' className='input-text'/>
        </div>
        <div className='input-element'>
          <label htmlFor='password' className='input'>Password:</label>
          <input type="password" id="password" placeholder='********' className='input-text' />
        </div>
        <div className='input-element'>
          <label htmlFor='password' className='input'>Re-Password:</label>
          <input type="password" id="password" placeholder='********' className='input-text' />
        </div>
        <div className='button-element'>
          <button className='button'>Sign Up</button>
        </div>
        </form>
        <br/>
        <p className='login-para'>Already have account?</p>
        <div className='button-element'>
        <Link to="/login" className='button-login' ><button className='button-login'>Login</button></Link>
         </div>
      </div>
    </div>
        
    
  )
}

export default Register