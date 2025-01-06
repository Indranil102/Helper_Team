import React from 'react'
import './SelectDepartment'
const SelectDepartment = () => {
  return (
    <div>
      <div className="select-year-fullscreen">
          <h1>Select a Year</h1>
          <div className="container">
            <button className="box">
              1 Year
            </button>
            <button className="box"  >
              2 Year
            </button>
            <button className="box" >
              3 Year
            </button>
            <button className="box"  >
              4 Year
            </button>
          </div>
        </div>
    </div>
  )
}

export default SelectDepartment
