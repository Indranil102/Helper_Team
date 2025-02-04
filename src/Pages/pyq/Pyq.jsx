import React, { useState } from 'react';
import './Pyq.css';
import { FcQuestions } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Papers from './Papers';

const Pyq = () => {
  const [selectedSem, setSelectedSem] = useState('odd');  
  const [selectedtest, setSelectedtest] = useState('T0');
  const [clickedTest, setClickedTest] = useState(false);
  const [selectedYear, setSelectedYear] = useState('First');
  function handleTestClick(test) {
    setSelectedtest(test);
    setClickedTest(true);
  }

  function selectSem() {
    return (
      selectedSem === 'odd' ? (
        <>
          <div style={{gap:'20px', display:'flex', flexDirection:'column'}}>
          <div className={`test ${selectedtest === 'T1' ? 'selected' : ''}`} onClick={() => handleTestClick('T1')}>
            <h3>T1 odd</h3>
          </div>
          <div className={`test ${selectedtest === 'T2' ? 'selected' : ''}`} onClick={() => handleTestClick('T2')}>
            <h3>T2 odd</h3>
          </div>
          <div className={`test ${selectedtest === 'T3' ? 'selected' : ''}`} onClick={() => handleTestClick('T3')}>
            <h3>T3 odd</h3>
          </div>
          </div>
        </>
      ) : (
        <>
          <div style={{gap:'20px', display:'flex',flexDirection:'column'}}>
          <div className={`test ${selectedtest === 'T1' ? 'selected' : ''}`} onClick={() => handleTestClick('T1')}>
            <h3>T1 even</h3>
          </div>
          <div className={`test ${selectedtest === 'T2' ? 'selected' : ''}`} onClick={() => handleTestClick('T2')}>
            <h3>T2 even</h3>
          </div>
          <div className={`test ${selectedtest === 'T3' ? 'selected' : ''}`} onClick={() => handleTestClick('T3')}>
            <h3>T3 even</h3>
          </div>
          </div>
         
        </>
      )
    );
  }

  return (
    <div>
      <div className="second-part">
        <div className='second-two'>< FcQuestions /><div>PREVIOUS YEAR QUESTION</div></div>
        <div className="dropdown">
          <button className="dropdown-button">{selectedYear} Year<MdOutlineKeyboardArrowDown /></button>
          <div className="dropdown-content"> 
            <a href="#link1" className={selectedYear === 'First'? 'selected': ''} onClick={() => setSelectedYear('First')}>1 Year</a>
            <a href="#link2" className={selectedYear === 'Second'? 'selected': ''} onClick={() => setSelectedYear('Second')}>2 Year</a>
            <a href="#link3" className={selectedYear === 'Third'? 'selected': ''} onClick={() => setSelectedYear('Third')}>3 Year</a>
            <a href="#link3" className={selectedYear === 'Fourth'? 'selected': ''} onClick={() => setSelectedYear('Fourth')}>4 Year</a>
          </div>
        </div>
        {/* <div className="dropdown">
          <button className="dropdown-button">Foundation<MdOutlineKeyboardArrowDown /></button>
          <div className="dropdown-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
          </div>
        </div> */}
      </div>
      <div className='ppr-selector'>
       
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
       

        
        
          <div className='selected-content'>
          {selectSem()}
        </div> 
      </div>
      
      <div className='pyqs'><h4>PYQs{clickedTest && (<div className='pyqshow'>{selectedtest}</div>)}</h4></div>
      
      {clickedTest && (
        
        <div className='selected-test'>
        <div className='select-paper'>
          <Papers Sem={selectedSem} test={selectedtest} year={selectedYear}/>
        </div>
        </div>
      )
      }

      
    </div>
  );
};

export default Pyq;
