import React from 'react'
import "./style.css"
import { FaVimeoV} from "react-icons/fa"
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-home'>
      <div className='bg-container'>
        <div className='nav-heading'>
        <FaVimeoV className='react-icon'/>
        <h3 className='book-blog-heading'>Book-Blog</h3>
       </div>
       <div className='nav-container'>
        <a href="" className='nav-items'>Home</a>
        <a href="" className='nav-items'>Create</a>
        <a href="" className='nav-items'>Contact</a>
       </div>
        
        <h5><Link to="/register" className="register">Register/Login
        </Link></h5>
      </div>
       
    </div>
    </nav>
    
   
  )
}

export default Navbar

