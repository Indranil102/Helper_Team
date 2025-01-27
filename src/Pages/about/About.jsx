import React from 'react'
import './About.css'
import indu from '../../Images/IMG_20240328_121030_301-removebg-preview.png'
import me from '../../Images/me.jpg'
const About = () => {
  return (
    <>
    <div className='Developer'>
    <h1 >Developers</h1>
    </div>
    <div className='about-names'>
    <div className="container-about">
  <div>
    <img className="image" src={indu} alt="Indu" />
  </div>
  <div className="personal-details">
    <h5>Indranil Samanta</h5>
    <p>221B183</p>
    <p>Profession: Developer</p>
  </div>
</div>

  <div className="container-about">
  <div>
    <img className="image" src={me} alt="Indu" />
  </div>
  <div className="personal-details">
    <h5>Divyanshu Prajapati</h5>
    <p>221B155</p>
    <p>Profession: Developer</p>
  </div>
  </div> 
    </div>
    </>
  )
}

export default About
