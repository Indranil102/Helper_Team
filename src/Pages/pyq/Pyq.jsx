import React from 'react'

import './Pyq.css'

import { CiStickyNote } from "react-icons/ci";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const fileUrl1 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl2 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl3 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl4 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl5 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";

const getShortenedUrl = (url) => {
    return url.length > 30 ? `${url.substring(0, 30)}...` : url;
};

const Pyq = () => {
  return (


    <div>
      <div className="second-part">
        <div className='second-two'><CiStickyNote /> PREVIOUS YEAR QUESTION </div>
        <div class="dropdown">
        <button class="dropdown-button">End_Sem <MdOutlineKeyboardArrowDown /></button>
        <div class="dropdown-content"> 
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
    </div>
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

export default Pyq
