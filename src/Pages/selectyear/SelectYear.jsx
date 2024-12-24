import React, { useState } from 'react';
import './SelectYear.css';

const SelectYear = () => {
  const [selectedYear, setSelectedYear] = useState(null);

 
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  
  const handlePYQClick = () => {
    if (!selectedYear) {
      alert('Please select a year first!');
    } else {
      
      window.location.href = `/pyq/${selectedYear}`; // Example navigation logic
    }
  };

  return (
    <div className="select-year-container">
      <div className="container">
        <button className="box" onClick={() => handleYearClick('1 Year')}>
          1 Year
        </button>
        <button className="box" onClick={() => handleYearClick('2 Year')}>
          2 Year
        </button>
        <button className="box" onClick={() => handleYearClick('3 Year')}>
          3 Year
        </button>
        <button className="box" onClick={() => handleYearClick('4 Year')}>
          4 Year
        </button>
      </div>
      <button className="pyq-button" onClick={handlePYQClick}>
        Go to PYQ
      </button>
    </div>
  );
};

export default SelectYear;
