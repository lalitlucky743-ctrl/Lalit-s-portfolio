import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bg">About Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <strong>Lalit Bisht</strong> — a passionate BCA student at Soban Singh Jeena University, Almora.
              Currently diving deep into the world of <strong>web development</strong> with a focus on React.js and modern frontend technologies.
              I have built 2-3 real-world React projects that showcase my ability to craft interactive, component-driven user interfaces.
            </p>
            <p>
              Over the past year, I've been dedicated to learning modern web dev through hands-on projects, online courses, and building
              small startup prototypes. I bring creativity, discipline, and a growth mindset.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <span className="icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>BCA at Soban Singh Jeena University<br />8.2 CGPA (till 4th sem)</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Almora, Uttarakhand, India</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">💼</span>
                <div>
                  <h4>Availability</h4>
                  <p>Open for internships & junior roles</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <h3>Tech Stack</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-items">
                  <span>HTML5 & CSS3</span>
                  <span>JavaScript (ES6+)</span>
                  <span>React.js</span>
                  <span>Redux Toolkit</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools</h4>
                <div className="skill-items">
                  <span>Git & GitHub</span>
                  <span>Responsive Design</span>
                  <span>REST APIs</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About