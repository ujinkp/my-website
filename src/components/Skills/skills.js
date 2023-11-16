import React from 'react'
import './skills.css'
import USA_flag from '../../assets/USA_flag.jpg'
import Ukrainian_flag from '../../assets/Ukrainian_flag.jpg'

const Skills = () => {
  return (
    <section id='skillsContainer'>
      <span className='skillsTitle'>Skills</span>
      <div className='skillsList'>
        <div className='skills'>
          <h2>general level of computer skills - hight-level</h2>
        </div>
        <div className='skills'>
          <h2>BAS, Sonata, MeDoc, MS Office, Taxpayer's cabinet - hight-level</h2>
        </div>
      </div>
      <span className='languagesTitle'>Languages</span>
      <div className='languagesList'>
        <div className='language'>
          <img src={USA_flag}></img>
          <h2>English (B1)</h2>
        </div>
        <div className='language'>
          <img src={Ukrainian_flag}></img>
          <h2>Ukrainian (Native)</h2>
        </div>
      </div>
    </section>
  )
}

export default Skills