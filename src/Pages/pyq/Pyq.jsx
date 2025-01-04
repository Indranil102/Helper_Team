import React from 'react'

import './Pyq.css'

import { CiStickyNote } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuCloudDownload } from "react-icons/lu";
import { IoLinkOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const fileUrl1 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl2 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl3 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl4 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";
const fileUrl5 = "https://drive.google.com/file/d/1Ece0MVz3K6eEmoZm4fiNHLhSEQyA427o/view?usp=drive_link";

const getShortenedUrl = (url) => {
    return url.length > 15 ? `${url.substring(0, 15)}...` : url;
};

const Pyq = () => {
  return (


    <div>
    
      <div className="navbar">
      
      </div>

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
    
    <div className="main-part">
      <div className="left-part">
        <div className='info'>CT <RiArrowDropDownLine /></div>
        <div className='info'>CT <RiArrowDropDownLine /></div>
        <div className='info'>CT <RiArrowDropDownLine /></div>
        <div className='info'>CT <RiArrowDropDownLine /></div>
        <div className='info'>CT <RiArrowDropDownLine /></div>
        <div className='info'>CT <RiArrowDropDownLine /></div>
      </div>
      <div className="file-table">
        <div className="file-table-header">
          <h3>Title</h3>
          <h3>Link</h3>
        </div>
       
        <div className="file-row">
            <div className="file-title">
                <LuCloudDownload />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href={fileUrl1} target="_blank">
                    <p class="paper_link"><IoLinkOutline />{getShortenedUrl(fileUrl1)}</p>
                </a>
            </div>
        </div>
        <div className="file-row">
            <div className="file-title">
                <LuCloudDownload />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href={fileUrl2} target="_blank">
                    
                    <p class="paper_link"><IoLinkOutline />{getShortenedUrl(fileUrl2)}</p>
                </a>
            </div>
         </div>
         <div className="file-row">
            <div className="file-title">
                <LuCloudDownload />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href={fileUrl3} target="_blank">
                    
                    <p class="paper_link"><IoLinkOutline />{getShortenedUrl(fileUrl3)}</p>
                </a>
            </div>
         </div>
         <div className="file-row">
            <div className="file-title">
                <LuCloudDownload />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href={fileUrl4} target="_blank">
                    
                    <p class="paper_link"><IoLinkOutline />{getShortenedUrl(fileUrl4)}</p>
                </a>
            </div>
         </div>
         <div className="file-row">
            <div className="file-title">
                <LuCloudDownload />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href={fileUrl5} target="_blank">
                    
                    <p class="paper_link"><IoLinkOutline />{getShortenedUrl(fileUrl5)}</p>
                </a>
            </div>
         </div>
        
        </div>
    </div>
      
    </div>
  )
}

export default Pyq
