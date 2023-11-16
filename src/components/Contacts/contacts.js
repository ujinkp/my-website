import React from 'react'
import './contacts.css'
import FaceBookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram.png'

const Contacts = () => {
  return (
    <section id='contactsContainer'>
        <h2 className='contactsTitle'>Contact me</h2>
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Your name'/>
          <input type='email' className='email' placeholder='Your email'/>
          <textarea name='message'className='msg' rows='5' placeholder='Your message'></textarea>
          <button type='submit' value ='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <img src={FaceBookIcon} alt="" className='link'></img>
            <img src={instagramIcon} alt="" className='link'></img>
          </div>
        </form>
    </section>
  )
} 

export default Contacts