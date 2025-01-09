import React from 'react'
import './SelectDepartment.css'
const SelectDepartment = () => {
  return (
    <div className='mom'>
      <div className="select-year-fullscreen">
          <h1>Select a Year</h1>
          <div className="container">
            <button className="box">
              CSE
            </button>
            <button className="box"  >
              ECE
            </button>
            <button className="box" >
             CE
            </button>
            <button className="box"  >
              CHE
            </button>
            <button className="box"  >
               ME
            </button>
          </div>
        </div>
    </div>
  )
}

export default SelectDepartment
