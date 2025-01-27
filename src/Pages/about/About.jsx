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

    <h5><a href="https://www.linkedin.com/in/indranil-samanta-26558a253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Indranil Samanta</a></h5>
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
