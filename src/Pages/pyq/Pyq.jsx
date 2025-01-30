import React, { useState } from 'react';
import './Pyq.css';
import { FcQuestions } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Papers from './Papers';

const Pyq = () => {
  const [selectedSem, setSelectedSem] = useState('odd');  
  const [selectedtest, setSelectedtest] = useState('t1');
  const [isTestSelected, setIsTestSelected] = useState(false);

  function handleTestClick(test) {
    setSelectedtest(test);
    setIsTestSelected(true);
  }

  function selectSem() {
    return (
      selectedSem === 'odd' ? (
        <>
          <div className={`test ${selectedtest === 't1' ? 'selected' : ''}`} onClick={() => handleTestClick('t1')}>
            <h3>T1 odd</h3>
          </div>
          <div className={`test ${selectedtest === 't2' ? 'selected' : ''}`} onClick={() => handleTestClick('t2')}>
            <h3>T2 odd</h3>
          </div>
          <div className={`test ${selectedtest === 't3' ? 'selected' : ''}`} onClick={() => handleTestClick('t3')}>
            <h3>T3 odd</h3>
          </div>
        </>
      ) : (
        <>
          <div className={`test ${selectedtest === 't1' ? 'selected' : ''}`} onClick={() => handleTestClick('t1')}>
            <h3>T1 even</h3>
          </div>
          <div className={`test ${selectedtest === 't2' ? 'selected' : ''}`} onClick={() => handleTestClick('t2')}>
            <h3>T2 even</h3>
          </div>
          <div className={`test ${selectedtest === 't3' ? 'selected' : ''}`} onClick={() => handleTestClick('t3')}>
            <h3>T3 even</h3>
          </div>
        </>
      )
    );
  }

  return (
    <div>
      <div className="second-part">
        <div className='second-two'>< FcQuestions /><span>PREVIOUS YEAR QUESTION</span></div>
        <div className="dropdown">
          <button className="dropdown-button">Choose Year <MdOutlineKeyboardArrowDown /></button>
          <div className="dropdown-content"> 
            <a href="#link1">1 Year</a>
            <a href="#link2">2 Year</a>
            <a href="#link3">3 Year</a>
            <a href="#link3">4 Year</a>
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
        {!isTestSelected && ( // Hide sem-selectors when a test is selected
          <div className='sem-selectors'>
            <div 
              className={`sem-selector ${selectedSem === 'odd' ? 'selected' : ''}`}
              onClick={() => setSelectedSem('odd')} 
            >
              <h1>ODD Sem</h1>
            </div>
            <div 
              className={`sem-selector ${selectedSem === 'even' ? 'selected' : ''}`}
              onClick={() => setSelectedSem('even')} 
            >
              <h1>EVEN Sem</h1>
            </div>
          </div>
        )}

        
        {!isTestSelected && ( 
          <div className='selected-content'>
          {selectSem()}
        </div>

        )}
        {isTestSelected && (
          <div className='selected-test'>
          <div className='select-paper'>
            <Papers Sem={selectedSem} test={selectedtest} />
          </div>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default Pyq;
