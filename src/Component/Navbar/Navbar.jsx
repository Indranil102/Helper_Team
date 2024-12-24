import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div >
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
    </div>
  )
}

export default Navbar
