interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

function Navigation({ isOpen, onClose }: NavigationProps) {
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

export default Navigation
