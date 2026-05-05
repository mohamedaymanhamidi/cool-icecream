import { FaEnvelope,FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

import './Contact.css'

const Contact = () => {

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Washington, D.C.' },
    { icon: <FaPhoneAlt />, label: 'Phone', value: '(703) 930-5517' },
      { icon: <FaEnvelope />, label: 'Email', value: 'hello@coolicecream.com' },
  ]

  const socialLinks = [
    { icon: <FaInstagram />, name: 'Instagram', handle: '@coolicecream', link: '#' },
    { icon: <FaTiktok />, name: 'TikTok', handle: '@coolicecreamtruck', link: '#' },
    { icon: <FaFacebookF />, name: 'Facebook', handle: 'Cool Ice Cream Truck', link: '#' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn', handle: '@coolicecream', link: '#' },
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            We would love to hear from you! Book us, ask questions, or just say hi!
          </p>
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

            {/* Social */}
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-grid">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.link} className="social-card">
                    <div className="social-icon">{social.icon}</div>
                    <span className="social-name">{social.name}</span>
                    <span className="social-handle">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map */}
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