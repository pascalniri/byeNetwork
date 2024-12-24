import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Leadership from './pages/Leadership'
import Membership from './pages/Membership'
import Partners from './pages/Partners'
import Events from './pages/Events'
import Mentorship from './pages/Mentorship'
import AllAbout from './pages/AllAbout'
import Foundation from './pages/Foundation'
import Gallery from './pages/Gallery'
function App() {

  return (
   <BrowserRouter>
       <Navbar />
   <Routes>
    <Route path='/'  element ={<LandingPage />} />
    <Route path='/membership'  element ={<Membership />} />
    <Route path='/leadership' element={<Leadership />} />
    <Route path='/partners' element={<Partners />} />
    <Route path='/events' element={<Events />} />
    <Route path='/mentorship' element={<Mentorship />} />
    <Route path='/about' element={<AllAbout />} />
    <Route path='/foundation' element={<Foundation />} />
    <Route path='/gallery' element={<Gallery />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
