import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './components/Hero'
import Intro from './components/intro'
import Skills from './components/Skills'
import Mywork from './components/Mywork'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Intro/>
    <Skills/>
    <Mywork/>
    <Footer/>
    <Routes>
      <Route to = '/' element={<Home/>}/>
      <Route to='/about' element={<About/>}/>
      <Route to='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
