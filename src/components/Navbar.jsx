import { useEffect,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/fav1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
<Link to="/" className="navbar-logo">
  <div className="logo-icon">
    <img src={logo} alt="Cool Ice Cream Logo" />
  </div>
  <span className="logo-text">Cool Ice Cream</span>
</Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
  key={link.path}
  to={link.path}
  onClick={() => setIsOpen(false)}
  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
>
  {link.label}
</Link>
          ))}
        </div>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar