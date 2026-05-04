import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ FIXED: stable random bubbles
  const [bubbles] = useState(() =>
  Array.from({ length: 15 }).map(() => ({
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 100}%`,
    width: `${Math.random() * 40 + 10}px`,
    height: `${Math.random() * 40 + 10}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 4 + 3}s`,
  }))
)

  // ✅ FIXED: stable floating ice creams
  const [floatingItems] = useState(() =>
  ['🍦', '🍨', '🧁', '🍧'].map((emoji, i) => ({
    emoji,
    left: `${15 + i * 22}%`,
    delay: `${i * 0.8}s`,
    size: `${2 + Math.random()}rem`,
  }))
)

  const features = [
    {
      icon: '🍦',
      title: 'Magical Flavors',
      desc: 'Over 50 unique underwater-inspired ice cream flavors made with real ocean-fresh ingredients!',
    },
    {
      icon: '🚚',
      title: 'Mobile Truck',
      desc: 'Our colorful truck brings the party to your neighborhood, school, or special event!',
    },
    {
      icon: '🌊',
      title: 'Eco-Friendly',
      desc: 'We use biodegradable packaging and support ocean conservation with every scoop!',
    },
    {
      icon: '🎉',
      title: 'Party Ready',
      desc: 'Book us for birthdays, weddings, corporate events, and any celebration!',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Happy Parent',
      text: 'My kids absolutely love when the Cool Ice Cream Truck rolls up! The flavors are incredible and the staff is so friendly.',
      rating: 5,
    },
    {
      name: 'Jake T.',
      role: 'Birthday Party Host',
      text: 'Best birthday party ever! The truck showed up right on time and the kids went crazy for the Ocean Berry Blast.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'Ice Cream Lover',
      text: 'As an adult who loves ice cream, this truck delivers premium quality with a fun twist. The Coral Crunch is my favorite!',
      rating: 5,
    },
  ]

  const popularFlavors = [
    { name: 'Ocean Berry Blast', color: '#00c6ff', emoji: '🫐' },
    { name: 'Coral Crunch', color: '#ff6b9d', emoji: '🍓' },
    { name: 'Seaweed Swirl', color: '#00f5ff', emoji: '🥝' },
    { name: 'Treasure Vanilla', color: '#ffd93d', emoji: '✨' },
  ]

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" ref={heroRef}>
          <div className="hero-bubbles">
            {bubbles.map((style, i) => (
              <div key={i} className="hero-bubble" style={style} />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Dive Into</span>
            <span className="title-line highlight">Cool Ice Cream!</span>
          </h1>

          <p className="hero-subtitle">
            The most magical underwater ice cream experience in town.
            Fresh flavors, friendly faces, and endless fun!
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">🍦 See Our Menu</Link>
            <Link to="/events" className="btn-secondary">🎉 View Our Events</Link>
          </div>

          {/* Floating ice creams */}
          <div className="floating-ice-creams">
            {floatingItems.map((item, i) => (
              <span
                key={i}
                className="float-ice"
                style={{
                  left: item.left,
                  animationDelay: item.delay,
                  fontSize: item.size,
                }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLAVORS ===== */}
      <section className="flavors-preview section">
        <h2 className="section-title">Fan Favorites</h2>
        <div className="flavors-grid">
          {popularFlavors.map((flavor, i) => (
            <div key={i} className="flavor-card">
              <div className="flavor-emoji" >
                {flavor.emoji}
              </div>
              <h3>{flavor.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features-section section">
        <h2 className="section-title">Why We're Cool</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card glass">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section section">
        <h2 className="section-title">Happy Customers</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass">
              <div>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j}>⭐</span>
                ))}
              </div>
              <p>"{t.text}"</p>
              <h4>{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="cta-content glass-strong">
          <h2>Ready to Dive In?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">📅 Book Now</Link>
            <Link to="/events" className="btn-secondary">🗺️ Track Our Truck</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home