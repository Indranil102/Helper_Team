import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/'>
        <li>
            <h4 >
                <button> Home </button>
            </h4>
        </li>
        </Link>
        <Link to='/Pyq'>
        <li>
            <h4 >
                <button>  PYQ </button>
            </h4>
        </li>
        </Link>
        <Link to='/Lectures'>
        <li>
            <h4>
                <button>Lectures</button>
            </h4>
        </li>
        </Link>
        <Link to='/Notes'>
        <li>
            <h4 >
                <button> Notes</button>
            </h4>
        </li>
        </Link>
        <Link to='/Juetserver'>
        <li>
            <h4>
                <button>JUET Server</button>
            </h4>
        </li>
        </Link>
        <Link to='/About'>
        <li>
            <h4>
                <button>About</button>
            </h4>
        </li>
        </Link>

        <Link to={'/signup'}>
        <li>
            <button className='signin'>Sign in</button>
        </li>
        </Link>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
