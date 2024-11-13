import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


import Navbar from '../src/components/navbar/Navbar';
import Footer from '../src/components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import FAQ from './pages/faq/FAQ';
import Assistant from './pages/assistant/Assistant';
import Contact from './pages/contact/Contact';



function App() {
  return (

    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/FAQ" exact Component={FAQ} />
          <Route path="/assistant" exact Component={Assistant} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}


export default App;