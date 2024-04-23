import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Partners from './Components/Partners/Partners';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import AdminDashboard from './Components/AdminDashboard/AppAdmin';

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <Hero />
          <div className="container">
            <Title subTitle='Our Program' title='What We Offer' />
            <Programs />
            <About setPlayState={setPlayState} />
            <Title subTitle='Gallery' title='Partners' />
            <Partners />
            <Title subTitle='Testimonials' title='What They Say' />
            <Testimonials />
            <Title subTitle='Contact us' title='Get In Touch' />
            <Contact />
            <Footer />
          </div>
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

