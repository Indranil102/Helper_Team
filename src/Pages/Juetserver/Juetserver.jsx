import React from 'react'
import './Juetserver.css'
import SelectDepartment from '../SelectDepartment/SelectDepartment'
const Juetserver = () => {
  return (

    <div>
     <SelectDepartment/>
     
    </div>

    <div className="juetserver-container">
    <h1>JUET Server</h1>
    <SelectDepartment />
  </div>
  )
}

export default Juetserver
