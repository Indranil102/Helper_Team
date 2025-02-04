import React, { useState } from 'react'
import './HomePage.css'  
import { RxLaptop } from "react-icons/rx";
import {Link} from 'react-router-dom';
import illustrator from "../../Images/illustratoer.png";

import { FaArrowRight } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineServer } from "react-icons/hi";
import { FaRegShareFromSquare } from "react-icons/fa6";

const HomePage = () => {
     const [transformStyle, setTransformStyle] = useState('translate(0, 0)');

    const handleMouseMove = (e) => {
      const img = e.currentTarget.querySelector('img');
      const { left, top, width, height } = img.getBoundingClientRect();
  
      const x = e.clientX - left;
      const y = e.clientY - top;
  
      const moveX = (x / width) * 20 - 10; 
      const moveY = (y / height) * 20 - 10; 
  
      setTransformStyle(`translate(${moveX}px, ${moveY}px)`); 
    };
  
    const handleMouseLeave = () => {
      setTransformStyle('translate(0, 0)'); 
    };
    const notavailable = () =>{
      alert("Comming Soon")
    };
  
  return (
    
    
    <div>
        
        <div className='HeroSection'>
        <div className="content">
            <div className="left-Content">
                <h2>HelperTeam</h2>
                <p>Elevate your Academic journey with our website!
                 Find notes, past question papers, and essential tools to excel academically.
                 Join thousands of students who trust us as their go-to resource hub. Take the next step towards success today!</p>
                <div className="container">
                    {/* <Link to='/Lectures' style={{ textDecoration: 'none' }}> */}
                    <div className="click" onClick={notavailable}>
                        <RxLaptop />
                        <p>Lectures</p>
                    </div>
                    {/* </Link> */}
                    {/* <Link to='/Notes' style={{ textDecoration: 'none' }}> */}
                    <div className="click" onClick={notavailable}>
                        <BsPencilSquare />
                        <p>Notes</p>
                    </div>
                    {/* </Link> */}
                    <Link to='/Pyq' style={{ textDecoration: 'none' }}>
                    <div className="click">
                        <FaRegFileAlt />
                        <p>PYQ</p>
                    </div>
                    </Link>
                    <Link to='/Juetserver' style={{ textDecoration: 'none' }}>
                    <div className="click">
                        <HiOutlineServer size={50} />
                        <p>JUET Server</p>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div
      className="right"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={illustrator} 
        alt="Illustration"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          margin: '70px 0 0 0',
          transition: 'transform 0.1s ease-out', 
          transform: transformStyle, 
        }} />
        </div>

        </div>
        <div className="extra">
            <h3>Important <FaArrowRight /></h3>
            <div className='imp'>
                <h5><a href="https://www.juet.ac.in/">JAYPEE<FaRegShareFromSquare /></a></h5>
                <h5><a href="https://webkiosk.juet.ac.in/">WEBKIOSK<FaRegShareFromSquare /></a></h5>
            </div>
           

        </div>
    </div>
    
   
    </div>
  )
}

export default HomePage
