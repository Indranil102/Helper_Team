import React from 'react'
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
                    <Link to='/Lectures'>
                    <div className="click">
                        <RxLaptop />
                        <p>Lectures</p>
                    </div>
                    </Link>
                    <Link to='/Notes'>
                    <div className="click">
                        <BsPencilSquare />
                        <p>Notes</p>
                    </div>
                    </Link>
                    <Link to='/Pyq'>
                    <div className="click">
                        <FaRegFileAlt />
                        <p>PYQ</p>
                    </div>
                    </Link>
                    <Link to='/Juetserver'>
                    <div className="click">
                        <HiOutlineServer size={35} />
                        <p>JUET Server</p>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="right">
            <img src={illustrator} alt="illuststion" />
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
