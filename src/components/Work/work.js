import React from 'react'
import './work.css'

const Work = () => {
  return (
    <section id='workContainer'>
        <span className='workTitle'>Work experience</span>
        <div className='worksList'>
            <div className='work'>
              <h2>СFO (2022 - 2023)</h2>
              <p>Food production enterprise</p>
              <p>Planning, budgeting, controlling, analysis, resource management.</p>
            </div>
            <div className='work'>
              <h2>CAO (2011 - 2017)</h2>
              <p>Food production enterprise</p>
              <p>Organization of accounting at a manufacturing company. Implementation of new technologies. Personnel management. Reporting and control.</p>
            </div>
            <div className='work'>
              <h2>Entrepreneur (2010 - Present)</h2>
              <p>consulting services for EDS (Electronic Digital Signature), accounting, management, commercial activities, work with various software</p>
            </div>
            <div className='work'>
              <h2>Head of department (2007 - 2010)</h2>
              <p>IT services</p>
              <p>Initial branch opening, customer base expansion, provision of electronic digital signature services.</p>
            </div>
            <div className='work'>
              <h2>CAO (2004 - 2005)</h2>
              <p>Municipal Enterprise</p>
              <p>Organization of Accounting, reporting, and control.</p>
            </div>
        </div>
    </section>
  )
}

export default Work