import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: '📍', label: 'Address', value: '123 Ocean Drive, Bikini Bay' },
    { icon: '📞', label: 'Phone', value: '(555) 123-4567' },
    { icon: '✉️', label: 'Email', value: 'hello@coolicecream.com' },
    { icon: '🕐', label: 'Hours', value: 'Mon-Sun: 10AM - 8PM' },
  ]

  const socialLinks = [
    { icon: '📸', name: 'Instagram', handle: '@coolicecream' },
    { icon: '🎵', name: 'TikTok', handle: '@coolicecreamtruck' },
    { icon: '👍', name: 'Facebook', handle: 'Cool Ice Cream Truck' },
    { icon: '🐦', name: 'Twitter', handle: '@coolicecream' },
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We would love to hear from you! Book us, ask questions, or just say hi!</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-panel">
            <h2>Contact Info</h2>
            <p className="contact-intro">
              Whether you want to book our truck for an event, have a question about our menu, 
              or just want to say hello, we are here for you!
            </p>

            <div className="contact-details">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-detail-item">
                  <span className="detail-icon">{item.icon}</span>
                  <div className="detail-text">
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-grid">
                {socialLinks.map((social, i) => (
                  <a key={i} href="#" className="social-card">
                    <span className="social-emoji">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                    <span className="social-handle">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel glass">
            <h2>Send Us a Message</h2>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out! We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="booking">Book Our Truck</option>
                    <option value="menu">Menu Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>📨</span> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder section */}
      <section className="map-section section">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">We are usually cruising around Bikini Bay!</p>
        <div className="map-container glass">
          <div className="map-placeholder">
            <span className="map-emoji">🗺️</span>
            <h3>Interactive Map Coming Soon!</h3>
            <p>Track our truck in real-time and see our daily route.</p>
            <div className="map-features">
              <span>📍 Live Location</span>
              <span>🗓️ Weekly Schedule</span>
              <span>🔔 Event Alerts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact