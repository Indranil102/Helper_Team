import React from 'react'
import './HomePage.css'  
import { RxLaptop } from "react-icons/rx";
import illustrator from "../../Images/illustratoer.png";
import Navbar from '../../Component/Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineServer } from "react-icons/hi";

const HomePage = () => {
  return (
    
    <div>
        <Navbar/>
        <div className='HeroSection'>
        <div className="content">
            <div className="left-Content">
                <h2>HelperTeam</h2>
                <p>Elevate your Academic journey with our website!
                 Find notes, past question papers, and essential tools to excel academically.
                 Join thousands of students who trust us as their go-to resource hub. Take the next step towards success today!</p>
                <div className="container">
                    <div className="click">
                        <RxLaptop />
                        <p>Lectures</p>
                    </div>
                    <div className="click">
                        <BsPencilSquare />
                        <p>Notes</p>
                    </div>
                    <div className="click">
                        <FaRegFileAlt />
                        <p>PYQ</p>
                    </div>
                    <div className="click">
                        <HiOutlineServer size={9000} />
                        <p>JUET Server</p>
                    </div>
                    
                </div>
            </div>
            <div className="right">
            <img src={illustrator} alt="illuststion" />
            </div>

        </div>
        <div className="extra">
            <h3>Important <FaArrowRight /></h3>
            <div className='imp'>
                <h5>Jaypee<img src="" alt="jp" /></h5>
                <h5>Webkiosk<img src="" alt="jp" /></h5>
            </div>
           

        </div>
    </div>
    
   
    </div>
  )
}

export default HomePage
