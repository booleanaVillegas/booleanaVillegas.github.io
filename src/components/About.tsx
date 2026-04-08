import { useState } from 'react'
import SkillCard from './SkillCard'
import content from '../data/content.json'

function About() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const handleToggle = (cardTitle: string) => {
    setExpandedCard(expandedCard === cardTitle ? null : cardTitle)
  }

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left">
          <h1>ABOUT<br />ME</h1>
          {content.about.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a href="#contact" className="lilac contact-link">{content.about.contactPrompt}</a>
        </div>

        <div className="about-center">
          <h3 className="lilac">{content.about.profile.name}<br />{content.about.profile.location}</h3>
          <img src="/julianados.png" alt={content.about.profile.name} className="profile-pic" />
          <h3 className="purple">{content.about.profile.role}<br />{content.about.profile.education}</h3>
        </div>

        <div className="about-right">
          <h1>MY<br />SKILLS</h1>
          <SkillCard
            title="DEVELOPMENT"
            skills={content.skills.categories.development}
            isExpanded={expandedCard === 'DEVELOPMENT'}
            onToggle={() => handleToggle('DEVELOPMENT')}
          />
          <SkillCard
            title="DESIGN"
            skills={content.skills.categories.design}
            isExpanded={expandedCard === 'DESIGN'}
            onToggle={() => handleToggle('DESIGN')}
          />
          <SkillCard
            title="OTHERS"
            skills={content.skills.categories.prototyping}
            isExpanded={expandedCard === 'OTHERS'}
            onToggle={() => handleToggle('OTHERS')}
          />
        </div>
      </div>
    </section>
  )
}

export default About
