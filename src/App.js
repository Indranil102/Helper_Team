import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';
import HomePage from './Pages/home/HomePage';
import Navbar from './Component/Navbar/Navbar';
import Pyq from './Pages/pyq/Pyq';
// import Lectures from './Pages/lectures/Lectures';
import SignUp from './Component/signup/SignUp';
//import Notes from './Pages/notes/Notes';

import SelectDepartment from './Pages/SelectDepartment/SelectDepartment';
import About from './Pages/about/About';


function App() {
 /* const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const ProtectedRoute = ({ element }) => {
    return selectedYear ? element : <Navigate to="/select-year" replace />;
  };*/
  const [activePath, setActivePath] = useState('/'); 
  return (
    <BrowserRouter>
    <Navbar activePath={activePath} setActivePath={setActivePath}/>
      <Routes>
        
      <Route path='/' element={<HomePage setActivePath={setActivePath}/>} />
      <Route path='/pyq' element={<Pyq/>} />
      {/* <Route path='/Lectures' element={<Lectures/>} /> */}

      <Route path='/signup' element={<SignUp/>} />

      {/* <Route path='/notes' element={<Notes/>} /> */}
      <Route path='/juetserver' element={<SelectDepartment
      />} />
      <Route path='/About' element={<About
      />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
