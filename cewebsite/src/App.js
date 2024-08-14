import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import ThankYouPage from './ThankYouPage';
import Home from './Home';
import Menu from './Menu';
import Acinfo from './Acinfo';

function App() {
  return (
    <>
      <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acinfo" element={<Acinfo />} /> 
        <Route path="/applying" element={<FormPage />} /> 
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;



