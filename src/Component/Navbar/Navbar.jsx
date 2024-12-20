import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="helper">
        <h2 >
            HelperTeam
        </h2>
        <h4 >
           <button> Home </button>
        </h4>
        <h4 >
          <button>  PYQ </button>
        </h4>
        <h4 >
           <button> Notes</button>
        </h4>
        <h4>
        <button>Tutorials</button>
        </h4>
        <button className='signin'>Sign in</button>

      </div>
    </div>
  )
}

export default Navbar
