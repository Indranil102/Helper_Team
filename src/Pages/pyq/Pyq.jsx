import React from 'react'

import './Pyq.css'
import Navbar from '../../Component/Navbar/Navbar'
import downarrow from'../../Images/drop-down-arrow.png'
import notebook from '../../Images/file.png'

const Pyq = () => {
  return (
    <div>
    
      <div className="navbar">
          <Navbar/>
      </div>

      <div className="second-part">
        <div className='second-two'><img src={notebook} alt="ik" /> PREVIOUS YEAR QUESTION </div>
        <div class="dropdown">
        <button class="dropdown-button">End_Sem <img src={downarrow} alt="dropdown" /></button>
        <div class="dropdown-content"> 
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-button">Foundation<img src={downarrow} alt="dropdown" /></button>
    <div class="dropdown-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
    </div>
    </div>
        </div>
    
    <div className="main-part">
      <div className="left-part">
        <div className='info'>CT <img src="" alt="arrow" /></div>
        <div className='info'>CT <img src="" alt="arrow" /></div>
        <div className='info'>CT <img src="" alt="arrow" /></div>
        <div className='info'>CT <img src="" alt="arrow" /></div>
        <div className='info'>CT <img src="" alt="arrow" /></div>
        <div className='info'>CT <img src="" alt="arrow" /></div>
      </div>
      <div className="file-table">
        <div className="file-table-header">
          <h3>Title</h3>
          <h3>Link</h3>
        </div>
        <div className="file-row">
            <div className="file-title">
                <img src="" alt="Download Icon" />
                <p>May22 AN</p>
            </div>
            <div className="file-url">
                <a href="https://drive.google.com/file/d/1xemG..." target="_blank">
                    <img src="" alt="Link Icon" />
                </a>
            </div>
        </div>
        <div className="file-row">
            <div className="file-title">
                <img src="" alt="Download Icon" />
                <p>Sep22 AN</p>
            </div>
            <div className="file-url">
                <a href="https://drive.google.com/file/d/1ncrlK..." target="_blank">
                    <img src="" alt="Link Icon" />
                </a>
            </div>
        </div>
        <div className="file-row">
            <div className="file-title">
                <img src="" alt="Download Icon" />
                <p>Sep22 AN</p>
            </div>
            <div className="file-url">
                <a href="https://drive.google.com/file/d/1ncrlK..." target="_blank">
                    <img src="" alt="Link Icon" />
                </a>
            </div>
        </div>
        <div className="file-row">
            <div className="file-title">
                <img src="" alt="Download Icon" />
                <p>Sep22 AN</p>
            </div>
            <div className="file-url">
                <a href="https://drive.google.com/file/d/1ncrlK..." target="_blank">
                    <img src="" alt="Link Icon" />
                </a>
            </div>
        </div>
        <div className="file-row">
            <div className="file-title">
                <img src="" alt="Download Icon" />
                <p>Sep22 AN</p>
            </div>
            <div className="file-url">
                <a href="https://drive.google.com/file/d/1ncrlK..." target="_blank">
                    <img src="" alt="Link Icon" />
                </a>
            </div>
        </div>
        
    </div>
    </div>
      
    </div>
  )
}

export default Pyq
