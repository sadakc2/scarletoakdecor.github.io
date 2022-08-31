import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Porfolio from './components/pages/Portfolio'
import Testimonials from './components/pages/Testimonials'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" exact element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
