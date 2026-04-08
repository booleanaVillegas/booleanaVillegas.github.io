import { useState } from 'react'
import './App.css'

// Navigation Component
function Navigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <nav className="nav-overlay" onClick={onClose}>
      <div className="nav-content">
        <a href="#intro" onClick={onClose}>Home</a>
        <a href="#about" onClick={onClose}>About</a>
        <a href="#projects" onClick={onClose}>Projects</a>
        <a href="#contact" onClick={onClose}>Contact</a>
      </div>
    </nav>
  )
}

// Menu Button Component
function MenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button className="menu-button" onClick={onClick} aria-label="Toggle menu">
      {isOpen ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )}
    </button>
  )
}

// Intro Section
function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <img src="/logo.svg" alt="Booleana Logo" className="logo" />
        <h2 className="intro-text">
          Hello! My name is Juliana Villegas. I am an interactive media designer.
          I love mobile, web and creative development.
          <br />
          <span className="welcome">Welcome to my portfolio!</span>
        </h2>
        <a href="#about" className="scroll-down purple">
          <h3>Do you want to know more about me?<br />V</h3>
        </a>
      </div>
    </section>
  )
}

// Skills data
const skillsData = {
  development: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'CSS'],
  design: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX'],
  prototyping: ['Framer', 'InVision', 'Principle', 'After Effects']
}

// Skill Card Component
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`skill-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="skill-header">
        <h4>{title}</h4>
        <span className="skill-arrow purple">{isExpanded ? '\u25B4' : '\u25BE'}</span>
      </div>
      {isExpanded && (
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      )}
    </div>
  )
}

// About Section
function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left">
          <h1>ABOUT<br />ME</h1>
          <p>
            Interactive media design is the perfect combination between design and programming.
            Every good web, mobile, desktop and even physical platform needs to be centered in how
            the user feels during the experience and how they interact with it. This is the most
            important thing for me.
          </p>
          <p>
            I am very dedicated and responsible in every work I do. I love learning new things
            and experimenting with new programmable technologies. Do you want to work together?
          </p>
          <a href="#contact" className="lilac contact-link">Feel free to Contact me!</a>
        </div>

        <div className="about-center">
          <h3 className="lilac">Juliana Villegas<br />Cali, Colombia</h3>
          <img src="/julianados.png" alt="Juliana Villegas" className="profile-pic" />
          <h3 className="purple">Creative Developer<br />Universidad Icesi</h3>
        </div>

        <div className="about-right">
          <h1>MY<br />SKILLS</h1>
          <SkillCard title="DEVELOPMENT" skills={skillsData.development} />
          <SkillCard title="DESIGN" skills={skillsData.design} />
          <SkillCard title="PROTOTYPING" skills={skillsData.prototyping} />
        </div>
      </div>
    </section>
  )
}

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Mentech',
    description: 'A mental health platform that connects users with professionals and provides resources for mental wellness.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    links: {
      github: 'https://github.com/booleanaVillegas',
      live: '#'
    }
  },
  {
    id: 2,
    title: 'ZOE Bot',
    description: 'An AI-powered chatbot designed to help students navigate university resources and answer common questions.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    links: {
      github: 'https://github.com/booleanaVillegas',
      live: '#'
    }
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'A showcase of creative design work including branding, illustration, and digital art projects.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    links: {
      github: 'https://github.com/booleanaVillegas',
      behance: 'https://www.behance.net/jumavipe'
    }
  }
]

// Projects Section
function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }

  const project = projectsData[currentProject]

  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="projects-title">MY PROJECTS</h1>

        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevProject} aria-label="Previous project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="project-showcase">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>

          <button className="carousel-btn next" onClick={nextProject} aria-label="Next project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="project-info">
          <h3 className="purple">{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.links.behance && (
              <a href={project.links.behance} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            )}
            {project.links.live && project.links.live !== '#' && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="carousel-dots">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1>CONTACT ME</h1>
        <p className="contact-text">
          You've just read a little bit about me, but there's so much more. If you want to work
          together or you want me to bring your ideas to life, contact me and we'll make it happen!
        </p>
        <p className="contact-text">
          This portfolio was made from scratch with lots of love and dedication, using React and TypeScript.
        </p>
        <h3 className="purple">You can find me at:</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jumavipe/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/booleanaVillegas" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.behance.net/jumavipe" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
          </a>
          <a href="mailto:juliana.maria.villegas@gmail.com" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

// Star Background Component
function StarBackground() {
  return (
    <div id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  )
}

// Main App
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <StarBackground />
      <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
