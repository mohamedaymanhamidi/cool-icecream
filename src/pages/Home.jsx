import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import pic1 from '../assets/con.png'
import pic2 from '../assets/wflc.png'
import pic3 from '../assets/snd.png'
import pic4 from '../assets/shic.png'

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
    title: 'Premium Quality Ice Cream',
    desc: 'We serve rich, creamy ice cream made with high-quality ingredients for a consistently smooth and delicious experience.',
  },
  {
    icon: '🚚',
    title: 'Fully Mobile Service',
    desc: 'Our ice cream truck comes directly to your location, making it easy to bring great treats to any neighborhood or event.',
  },
  {
    icon: '✨',
    title: 'Customizable Treats',
    desc: 'From cones to sundaes, personalize your order with a variety of toppings, sauces, and flavor combinations.',
  },
  {
    icon: '🎉',
    title: 'Perfect for Events',
    desc: 'Ideal for birthdays, school functions, private parties, and corporate events — we handle the treats so you can enjoy the moment.',
  },
]

  const testimonials = [
    {
      name: 'Amelia M.',
      role: 'Happy Parent',
      text: 'My kids absolutely love when the Cool Ice Cream Truck rolls up! The flavors are incredible and the staff is so friendly.',
      rating: 5,
    },
    {
      name: 'Henry H.',
      role: 'Birthday Party Host',
      text: 'Best birthday party ever! The truck showed up right on time and the kids went crazy for the Ocean Berry Blast.',
      rating: 5,
    },
    {
      name: 'Oliver R.',
      role: 'Ice Cream Lover',
      text: 'As an adult who loves ice cream, this truck delivers premium quality with a fun twist. The Coral Crunch is my favorite!',
      rating: 5,
    },
  ]

const popularFlavors = [
  { name: 'Ocean Berry Blast', image: pic1 },
  { name: 'Coral Crunch', image: pic2 },
  { name: 'Seaweed Swirl', image: pic3 },
  { name: 'Treasure Vanilla', image: pic4 },
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
          {popularFlavors.map((flavor) => (
              <img src={flavor.image} alt={flavor.name} className="flavor-img" />
          
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

    </div>
  )
}

export default Home