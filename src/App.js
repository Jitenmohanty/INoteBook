import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Toaster/>
      </Router>
    </NoteState>

  );
}

export default App;
