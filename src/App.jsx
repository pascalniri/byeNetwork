import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resources from './components/Resources'
import Footer from './components/Footer'
import Team from './components/Team'
import Membership from './components/Membership'
function App() {

  return (
   <BrowserRouter>
       <Navbar />
   <Routes>
    <Route path='/'  element ={<LandingPage />} />
    <Route path='/membership'  element ={<Membership />} />
    <Route path='/team' element={<Team />} />
    <Route path='/projects' element ={<Projects />} />
    <Route path='/resources' element={<Resources />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
