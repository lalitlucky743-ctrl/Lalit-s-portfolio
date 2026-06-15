import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)'
      document.body.style.color = '#e2e8f0'
    } else {
      document.body.style.background = 'linear-gradient(145deg, #e0eafc 0%, #cfdef3 100%)'
      document.body.style.color = '#1e2a3e'
    }
  }, [darkMode])

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App