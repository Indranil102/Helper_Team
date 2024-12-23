import React from 'react'
import './HomePage.css'  

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
                        <img src="" alt="" />
                        <p>Lectures</p>
                    </div>
                    <div className="click">
                        <img src="" alt="" />
                        <p>Notes</p>
                    </div>
                    <div className="click">
                        <img src="" alt="" />
                        <p>PYQ</p>
                    </div>
                    <div className="click">
                        <img src="" alt="" />
                        <p>TUTORIALS</p>
                    </div>
                    
                </div>
            </div>
            <div className="right">
                <img src="" alt="" />
            </div>

        </div>
      
    </div>
   
    </div>
  )
}

export default HomePage