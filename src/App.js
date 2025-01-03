import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './Pages/home/HomePage';
import About from './Pages/about/About';
import Pyq from './Pages/pyq/Pyq';
import Notes from './Pages/notes/Notes';
import Lectures from './Pages/lectures/Lectures';
import SelectYear from './Pages/selectyear/SelectYear';
import Juetserver from './Pages/Juetserver/Juetserver';

function App() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const ProtectedRoute = ({ element }) => {
    return selectedYear ? element : <Navigate to="/select-year" replace />;
  };

  return (
    <Router>
      <Routes>
        {/* Home Page is always accessible */}
        <Route path="/" element={<HomePage selectedYear={selectedYear} />} />

        {/* Redirect to SelectYear if no year is selected */}
        <Route
          path="/Lectures"
          element={<ProtectedRoute element={<Lectures selectedYear={selectedYear} />} />}
        />
        <Route
          path="/Notes"
          element={<ProtectedRoute element={<Notes selectedYear={selectedYear} />} />}
        />
        <Route
          path="/Pyq"
          element={<ProtectedRoute element={<Pyq selectedYear={selectedYear} />} />}
        />
        <Route
          path="/About"
          element={<ProtectedRoute element={<About selectedYear={selectedYear} />} />}
        />

        {/* Year selection page */}
        <Route
          path="/select-year"
          element={<SelectYear onYearSelect={handleYearSelection} />}
        />
        <Route
          path="/Juetserver"
          element={<ProtectedRoute element={<Juetserver selectedYear={selectedYear}/>} />}
        />

        {/* Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
