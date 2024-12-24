import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './Pages/home/HomePage';
import About from './Pages/about/About';
import Pyq from './Pages/pyq/Pyq';
import Notes from './Pages/notes/Notes';
import Lectures from './Pages/lectures/Lectures';
import SelectYear from './Pages/selectyear/SelectYear';

function App() {
  const [selectedYear, setSelectedYear] = useState(null);

 
  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <Router>
      <Routes>
        
        {!selectedYear ? (
          <Route path="*" element={<SelectYear onYearSelect={handleYearSelection} />} />
        ) : (
          <>
            <Route path="/" element={<HomePage selectedYear={selectedYear} />} />
            <Route path="/Lectures" element={<Lectures selectedYear={selectedYear} />} />
            <Route path="/Notes" element={<Notes selectedYear={selectedYear} />} />
            <Route path="/Pyq" element={<Pyq selectedYear={selectedYear} />} />
            <Route path="/About" element={<About selectedYear={selectedYear} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
