import React, { useState } from 'react';

import './Pyq.css';

import { CiStickyNote } from "react-icons/ci";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Pyq = () => {
  // Use state to manage selected semester
  const [selectedSem, setSelectedSem] = useState('odd');  

  // Function to render content based on the selected semester
  function selectSem() {
    return (
      selectedSem === 'odd' ? (
        <>
          <div className='test'><h3>T1 odd</h3></div>
          <div className='test'><h3>T2 odd</h3></div>
          <div className='test'><h3>T3 odd</h3></div>
        </>
      ) : (
        <>
          <div className='test'><h3>T1 even</h3></div>
          <div className='test'><h3>T2 even</h3></div>
          <div className='test'><h3>T3 even</h3></div>
        </>
      )
    );
  }

  return (
    <div>
      <div className="second-part">
        <div className='second-two'><CiStickyNote /> PREVIOUS YEAR QUESTION </div>
        <div className="dropdown">
          <button className="dropdown-button">End_Sem <MdOutlineKeyboardArrowDown /></button>
          <div className="dropdown-content"> 
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">Foundation<MdOutlineKeyboardArrowDown /></button>
          <div className="dropdown-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
          </div>
        </div>
      </div>

      <div className='ppr-selector'>
        <button 
          className='sem-selector' 
          onClick={() => setSelectedSem('odd')} // Update the state
        >
          <h1>ODD Sem</h1>
        </button>
        
        <button 
          className='sem-selector' 
          onClick={() => setSelectedSem('even')} // Update the state
        >
          <h1>EVEN Sem</h1>
        </button>
      </div>

      <div>
        {selectSem()}
      </div>
    </div>
  );
};

export default Pyq;
