import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
    { name: 'Linkedin', icon: '🐦', url: '#' },
  ]

  const quickLinks = [
    { path: '/menu', label: 'Our Menu' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120Z" fill="rgba(0,30,60,0.8)"/>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" fill="#00c6ff" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="30" cy="30" r="20" fill="#ffd93d"/>
                <circle cx="30" cy="30" r="12" fill="#ff6b9d"/>
                <circle cx="30" cy="30" r="6" fill="#00c6ff"/>
              </svg>
              <span>Cool Ice Cream</span>
            </div>
            <p className="footer-tagline">
              Bringing magical underwater treats to every neighborhood! 
              Dive into a world of flavor and fun.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Find Us</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Ocean Drive, Bikini Bay</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>hello@coolicecream.com</span>
            </div>
          {/* <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <span>Mon-Sun: 10AM - 8PM</span>
            </div>   */}
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Stay Cool!</h4>
            <p>Get updates on new flavors and truck locations!</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email..."
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                🍦
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cool Ice Cream Truck. All rights reserved. Made with 🍦 and 💙</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer