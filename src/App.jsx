import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Leadership from "./pages/Leadership";
import LeaderDetail from "./pages/LeaderDetail";
import Membership from "./pages/Membership";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Mentorship from "./pages/Mentorship";
import AllAbout from "./pages/AllAbout";
import Foundation from "./pages/Foundation";
import Gallery from "./pages/Gallery";
import { initGA, trackPageView } from "./analytics";

function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize GA
    trackPageView(location.pathname); // Track initial page
  }, []);

  useEffect(() => {
    trackPageView(location.pathname); // Track subsequent navigation
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
    <TrackPageViews />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/leadership/:id" element={<LeaderDetail />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<AllAbout />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
