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
            PYQ
        </h4>
        <h4 >
            Notes
        </h4>
        <h4>
            Tutorials
        </h4>
        <button className='signin'>Sign in</button>

      </div>
    </div>
  )
}

export default Navbar
