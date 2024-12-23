

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import About from './Pages/about/About';
import Pyq from './Pages/pyq/Pyq';
import Notes from './Pages/notes/Notes';
import Lectures from './Pages/lectures/Lectures';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='./Pages/lectures/Lectures' element={<Lectures/>} />
        <Route path='./Pages/notes/Notes' element={<Notes/>} />
        <Route path='./Pages/pyq/Pyq' element={<Pyq/>} />
        <Route path='./Pages/about/About' element={<About/>} />

      </Routes>
    </Router>
  )
}

export default App

