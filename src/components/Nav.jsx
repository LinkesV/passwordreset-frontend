import React from 'react'
import './styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navback'>
      <div className='navbody'>
        <p>Password Reset Flow Website</p>
        <div className='backtologin'>
          <Link to={'/'}><button class='bg-green  -500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-blue-700 rounded'>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav