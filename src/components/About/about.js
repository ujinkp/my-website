import React from 'react'
import './about.css'
import myPhoto from '../../assets/I-transparent.png'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <section id='aboutContainer'>
      <div className='aboutBlock'>
        <div className='aboutText'><span className='aboutName'>Valentyn Sotnytskyi</span><br/>Finances and Accounting</div>
        <p className='aboutDescription'>
          20 years of experience in accounting and management.
        </p>
        <Link activeClass='active' to = 'contactsContainer' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src='' alt=''/>consultation</button></Link>
      </div>
      <img src={myPhoto} className='bg'></img>
    </section>
  )
}

export default About