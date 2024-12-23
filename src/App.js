

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
        <Route path='/Lectures' element={<Lectures/>} />
        <Route path='/Notes' element={<Notes/>} />
        <Route path='/Pyq' element={<Pyq/>} />
        <Route path='/About' element={<About/>} />

      </Routes>
    </Router>
  )
}

export default App

