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

import Profile from './pages/user/profile/Profile';
import Login from './pages/user/login/Login';
import Logout from './pages/user/logout/Logout';
import Signup from './pages/user/signup/Signup';


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

          <Route path="/profile" exact Component={Profile} />
          <Route path="/login" exact Component={Login} />
          <Route path="/logout" exact Component={Logout} />
          <Route path="/signup" exact Component={Signup} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}


export default App;