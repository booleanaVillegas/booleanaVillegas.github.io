import content from '../data/content.json'

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <img src="/logo.svg" alt="Booleana Logo" className="logo" />
        <h2 className="intro-text">
          {content.intro.greeting}
          <br />
          <span className="welcome">{content.intro.welcome}</span>
        </h2>
        <a href="#about" className="scroll-down purple">
          <h3>{content.intro.scrollPrompt}<br />V</h3>
        </a>
      </div>
    </section>
  )
}

export default Intro
