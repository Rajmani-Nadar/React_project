import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobListings from './components/JobListings';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobListings />
      <Footer />
    </>
  );
};

export default App;
