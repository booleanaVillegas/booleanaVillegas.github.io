import { useState } from 'react'
import Navigation from './components/Navigation'
import MenuButton from './components/MenuButton'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StarBackground from './components/StarBackground'
import './App.css'

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
