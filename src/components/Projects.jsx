import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TravelGo - Travel Website',
      icon: '✈️',
      tech: ['React', 'Tailwind CSS', 'React Router', 'REST API'],
      description: 'A complete travel booking platform where users can search destinations, book hotels, view packages, and read travel blogs. Features include user authentication, payment gateway integration, and responsive design.',
      githubLink: 'https://github.com/lalitlucky743-ctrl/TravelGo',  // Apna GitHub link daal
      liveLink: 'https://travel-go-tourism.netlify.app/'                   // Apna live link daal (agar hai to)
    },
    {
      id: 2,
      title: 'Lucky Store - E-commerce Website',
      icon: '🛒',
      tech: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Stripe'],
      description: 'A full-stack e-commerce platform with product listings, shopping cart, wishlist, user authentication, order management, and secure payment integration. Built with MERN stack.',
      githubLink: 'https://github.com/lalitlucky743-ctrl/Lucky-Store',  // Apna GitHub link daal
      liveLink: 'https://luckystore-onestopsolution.netlify.app/'                     // Apna live link daal (agar hai to)
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bg">My Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} className="project-link" target="_blank">GitHub →</a>
                {project.liveLink && (
                  <a href={project.liveLink} className="project-link" target="_blank">Live Demo →</a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="journey-card">
          <div className="journey-icon">📖</div>
          <div className="journey-content">
            <h3>My Web Dev Journey</h3>
            <p>
              Currently deep-diving into <strong>Next.js, Node.js, Express, and MongoDB</strong>.
              Building full-stack projects to become a MERN developer.
              Check out my GitHub for more projects: 
              <a href="https://github.com/lalitlucky743-ctrl/" target="_blank" style={{color: 'white', marginLeft: '5px'}}>
                https://github.com/lalitlucky743-ctrl/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects