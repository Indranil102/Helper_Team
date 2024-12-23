import React from 'react'
import './HomePage.css'  
import lectureimg from '../../Images/laptop.png'
import noteswriting from '../../Images/pencil.png'
import pyqpaper from '../../Images/file.png'
import juet from '../../Images/large_Jaypee_University_of_Engineering_and_Technology_Guna_JUET_Guna_dbc4938677_2500db8640.png'
import arrow from '../../Images/right-arrow.png'
const HomePage = () => {
  return (
    
    <div>
        <div className='Navbar'>
      <ul className="helper">
        <li>
            <h2 >
                HelperTeam
            </h2>
        </li>
        <li>
            <h4 >
                <button> Home </button>
            </h4>
        </li>
        <li>
            <h4 >
                <button>  PYQ </button>
            </h4>
        </li>
        <li>
            <h4 >
                <button> Notes</button>
            </h4>
        </li>
        <li>
            <h4>
                <button>JUET Server</button>
            </h4>
        </li>
        <li>
            <h4>
                <button>About</button>
            </h4>
        </li>
        <li>
            <button className='signin'>Sign in</button>
        </li>
      </ul>
    </div>
        <div className='HeroSection'>
        <div className="content">
            <div className="left-Content">
                <h2>HelperTeam</h2>
                <p>Elevate your Academic journey with our website!
                 Find notes, past question papers, and essential tools to excel academically.
                 Join thousands of students who trust us as their go-to resource hub. Take the next step towards success today!</p>
                <div className="container">
                    <div className="click">
                        <img src={lectureimg} alt="" />
                        <p>Lectures</p>
                    </div>
                    <div className="click">
                        <img src={noteswriting} alt="" />
                        <p>Notes</p>
                    </div>
                    <div className="click">
                        <img src={pyqpaper} alt="" />
                        <p>PYQ</p>
                    </div>
                    <div className="click">
                        <img src={juet} alt="" />
                        <p>JUET Server</p>
                    </div>
                    
                </div>
            </div>
            <div className="right">
                <img src='' alt="illuststion" />
            </div>

        </div>
        <div className="extra">
            <h3>Important <img src={arrow} alt="arrow" /></h3>
            <div className='imp'>
                <h5>JUET</h5>
                <h5>webkisok</h5>
            </div>
           

        </div>
    </div>
    
   
    </div>
  )
}

export default HomePage
