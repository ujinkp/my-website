import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactLogo from '../../assets/contact-mail.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='' className='desktopMenuLogo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='aboutContainer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>About</Link>
        <Link activeClass='active' to='workContainer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Work</Link>
        <Link activeClass='active' to='educationContainer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Education</Link>
        <Link activeClass='active' to='skillsContainer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Skills</Link>
      </div>
      <Link activeClass='active' to='contactsContainer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>
        <button className='desktopMenuBtn'>
          <img src={contactLogo} alt='' className='desktopMenuImg' />Contacts</button>
      </Link>
    </nav>
  )
}

export default Navbar