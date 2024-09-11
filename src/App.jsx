import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
// import Resources from './components/Resources'

function App() {

  return (
   <BrowserRouter>
       <Navbar />
   <Routes>
    <Route exact path='/' element={<LandingPage />} />
    <Route path='/projects' element={<Projects />} />
    {/* <Route path='/resources' element={<Resources />} /> */}
   </Routes>
   </BrowserRouter>
  )
}

export default App
