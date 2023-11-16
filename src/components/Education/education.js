import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='educationContainer'>
        <span className='educationTitle'>Education</span>
        <div className='educationsList'>
            <div className='education'>
              <h2>Master's degree (2007 - 2008)</h2>
              <p>Ternopil National Economic University (Accounting and Audit)</p>
            </div>
            <div className='education'>
              <h2>Specialist's degree (2004 - 2006)</h2>
              <p>National Academy of the State Tax Service of Ukraine (Accounting and Audit)</p>
            </div>
            <div className='education'>
              <h2>Entrepreneur (2010 - Present)</h2>
              <p>consulting services for EDS (Electronic Digital Signature), accounting, management, commercial activities, work with various software</p>
            </div>
            <div className='education'>
              <h2>Bachelor's degree (2001 - 2004)</h2>
              <p>Kamianets-Podilskyi College of Food Industry (Accounting and Audit)</p>
            </div>
        </div>
    </section>
  )
}

export default Education