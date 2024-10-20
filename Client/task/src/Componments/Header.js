import React from 'react'
import logo from "./Imaages/logo.png" 
const Header = () => {
  return (
    <div>
<header className="header">
    <div className="container">
      <div className="logo">
        <img src={logo} alt='logo' className='w-25'/>
      </div>
      <nav>
        <ul>
          <li><a href="#">Aggrements</a></li>
          <li><a href="#">Template</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Login</a></li>
        <button className='btn btn-primary'>Browser Template</button>
        </ul>

      </nav>
    </div>
  </header>
    </div>
    
  )
}

export default Header