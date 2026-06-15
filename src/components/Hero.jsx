import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">✨ Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Lalit Bisht</span>
        </h1>
        <div className="typed-wrapper">
          <span className="typed-text">Web Developer (React Enthusiast)</span>
        </div>
        <p className="hero-description">
          Passionate BCA student at Soban Singh Jeena University, Almora. 
          I build modern web applications with React.js and create beautiful, 
          responsive user experiences.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProjects}>View Projects 🚀</button>
          <button className="btn-secondary" onClick={scrollToContact}>Contact Me 📧</button>
        </div>
      </div>
      <div className="hero-shape">
        {/* YAHAN BLUE CIRCLE HAI - ISME PHOTO DALENGE */}
        <div className="shape-circle">
          <img 
            src="image.png" 
            alt="Lalit Bisht" 
            className="circle-photo"
          />
        </div>
        <div className="floating-icon icon-1">⚛️</div>
        <div className="floating-icon icon-2">🚀</div>
        <div className="floating-icon icon-3">💻</div>
        <div className="floating-icon icon-4">🎨</div>
      </div>
    </section>
  )
}

export default Hero