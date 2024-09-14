import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import Resources from './components/Resources';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/resources" element={<Resources />} /> */}
    </Routes>
  );
}

export default App;
