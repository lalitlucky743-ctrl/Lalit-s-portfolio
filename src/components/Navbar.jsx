import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">LB</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <button className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</button>
          <button className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</button>
          <button className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</button>
          <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar