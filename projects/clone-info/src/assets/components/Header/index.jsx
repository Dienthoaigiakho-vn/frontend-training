import React from 'react'
import "./index.css"
import Logo from './Logo'
import Search from './Search'
import Service from './Service'
const Header = () => {
  return (
    <header>
    <div className="header-container">
      <Logo></Logo>
      <Search></Search>
    </div>
    </header>
  )
}

export default Header
