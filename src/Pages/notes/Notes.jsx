import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
import './Notes.css'



const Notes = () => {
  return (
    <div>
      <div className="second-part">
              <div className='second-two'><CiStickyNote /> PREVIOUS YEAR QUESTION </div>

              <div class="dropdown">
              <button class="dropdown-button">Foundation<MdOutlineKeyboardArrowDown /></button>
          <div class="dropdown-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
          </div>
          </div>
             
          </div>
          
              </div>
    
  )
}

export default Notes
