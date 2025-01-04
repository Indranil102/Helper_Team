import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './Pages/home/HomePage';
import Navbar from './Component/Navbar/Navbar';
import Pyq from './Pages/pyq/Pyq';
import Lectures from './Pages/lectures/Lectures';
import SignUp from './Component/signup/SignUp';
import Notes from './Pages/notes/Notes';


function App() {
 /* const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const ProtectedRoute = ({ element }) => {
    return selectedYear ? element : <Navigate to="/select-year" replace />;
  };*/

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
      <Route path='/' element={<HomePage />} />
      <Route path='/pyq' element={<Pyq/>} />
      <Route path='/Lectures' element={<Lectures/>} />

      <Route path='/signup' element={<SignUp/>} />

      <Route path='/notes' element={<Notes/>} />


     
     


        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
