import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Testimonials from './components/pages/Testimonials'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Introduction from './components/pages/Introduction'

function App(props) {

  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
