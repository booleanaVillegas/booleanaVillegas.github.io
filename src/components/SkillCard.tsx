interface SkillCardProps {
  title: string
  skills: string[]
  isExpanded: boolean
  onToggle: () => void
}

function SkillCard({ title, skills, isExpanded, onToggle }: SkillCardProps) {
  return (
    <div
      className={`skill-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      <div className="skill-header">
        <h4>{title}</h4>
        <span className="skill-arrow purple">{isExpanded ? '\u25B4' : '\u25BE'}</span>
      </div>
      <div className="skill-tags">
        <div className="skill-tags-inner">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
