import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('lalitlucky743@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bg">Get In Touch</span>
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>lalitlucky743@gmail.com</p>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? 'Copied! ✓' : 'Copy Email'}
              </button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>+91 9084511340</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message ✉️</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact