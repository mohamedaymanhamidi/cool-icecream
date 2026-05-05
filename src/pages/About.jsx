import './About.css'

const About = () => {
const milestones = [
  { year: '2021', title: 'Launch', desc: 'Started operating as a small mobile ice cream service with a focus on quality and consistency.', emoji: '🚚' },
  { year: '2022', title: 'First Events', desc: 'Began serving at local events and private bookings, building a loyal customer base.', emoji: '🎪' },
  { year: '2023', title: 'Menu Expansion', desc: 'Expanded the menu with new flavors, toppings, and drink options.', emoji: '🍦' },
  { year: '2024', title: 'Growing Demand', desc: 'Increased bookings and presence in high-traffic locations and community events.', emoji: '📈' },
  { year: '2025', title: 'Brand Development', desc: 'Improved branding, customer experience, and digital presence.', emoji: '💻' },
  { year: '2026', title: 'Today', desc: 'Continuing to grow while focusing on quality, service, and customer satisfaction.', emoji: '⭐' },
]

  const values = [
  {
    icon: '🍦',
    title: 'Quality First',
    desc: 'We focus on serving fresh, consistent products that customers can trust every time.',
  },
  {
    icon: '🤝',
    title: 'Customer Experience',
    desc: 'Friendly service and a smooth experience are at the center of everything we do.',
  },
  {
    icon: '⚡',
    title: 'Efficiency',
    desc: 'Fast service without compromising quality, especially during busy events and peak hours.',
  },
  {
    icon: '📍',
    title: 'Local Presence',
    desc: 'We operate close to our community, serving events, gatherings, and everyday customers.',
  },
]

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">Our Story</h1>
          <p className="about-subtitle">From a dream to the sweetest truck on the road</p>
        </div>
      </section>

      <section className="story-section section">
        <div className="story-grid">
          <div className="story-visual">
            <div className="story-truck-illustration">
              <svg viewBox="0 0 300 200" fill="none">
                <rect x="40" y="60" width="220" height="100" rx="15" fill="#ffd93d" stroke="#e6c200" strokeWidth="2"/>
                <rect x="50" y="70" width="80" height="50" rx="8" fill="#00c6ff" opacity="0.3"/>
                <rect x="140" y="70" width="50" height="50" rx="8" fill="#00c6ff" opacity="0.3"/>
                <rect x="200" y="70" width="50" height="50" rx="8" fill="#00c6ff" opacity="0.3"/>
                <circle cx="90" cy="160" r="25" fill="#333" />
                <circle cx="90" cy="160" r="15" fill="#555" />
                <circle cx="210" cy="160" r="25" fill="#333" />
                <circle cx="210" cy="160" r="15" fill="#555" />
                <rect x="100" y="30" width="100" height="40" rx="8" fill="#ff6b9d" />
                <text x="150" y="55" textAnchor="middle" fill="white" fontFamily="Fredoka One" fontSize="16">COOL ICE</text>
                <circle cx="150" cy="20" r="15" fill="#00f5ff" opacity="0.5"/>
                <circle cx="130" cy="15" r="10" fill="#c77dff" opacity="0.4"/>
                <circle cx="170" cy="18" r="8" fill="#ffd93d" opacity="0.5"/>
                <circle cx="70" cy="95" r="12" fill="#ffd93d"/>
                <circle cx="66" cy="92" r="3" fill="#001e3c"/>
                <circle cx="74" cy="92" r="3" fill="#001e3c"/>
                <path d="M66 100 Q70 104 74 100" stroke="#001e3c" strokeWidth="1.5" fill="none"/>
                <path d="M230 85 L240 95 L230 105" fill="#ff6b9d"/>
                <path d="M235 90 L242 97 L235 104" fill="#ff6b9d"/>
              </svg>
            </div>
          </div>
        <div className="story-text">
  <h2>How It All Started</h2>
  <p>
    Cool Ice Cream started as a simple idea: bring high-quality ice cream directly to people, 
    wherever they are. What began as a small mobile setup quickly grew thanks to word of mouth, 
    repeat customers, and a strong focus on consistency and service.
  </p>
  <p>
    From day one, the goal has been clear — offer a clean, professional experience with products 
    people can trust. Every item on the menu is selected carefully, from classic cones to modern 
    treats, ensuring both quality and variety.
  </p>
  <p>
    Today, Cool Ice Cream operates at events, private bookings, and busy public locations, 
    serving families, students, and communities. We continue to grow by focusing on what matters: 
    reliable service, great taste, and a smooth customer experience.
  </p>
</div>
        </div>
      </section>

      <section className="mascots-section section">
        <h2 className="section-title">Meet Our Mascots</h2>
        <p className="section-subtitle">The friendly faces of Cool Ice Cream Truck</p>
        <div className="mascots-grid">
          <div className="mascot-card glass">
            <div className="mascot-visual">
              <svg viewBox="0 0 150 180" fill="none">
                <rect x="25" y="25" width="100" height="130" rx="18" fill="#ffd93d" stroke="#e6c200" strokeWidth="2"/>
                <circle cx="55" cy="70" r="10" fill="#001e3c"/>
                <circle cx="95" cy="70" r="10" fill="#001e3c"/>
                <circle cx="58" cy="67" r="4" fill="white"/>
                <circle cx="98" cy="67" r="4" fill="white"/>
                <path d="M55 95 Q75 115 95 95" stroke="#001e3c" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <circle cx="35" cy="50" r="5" fill="#ff6b9d" opacity="0.5"/>
                <circle cx="115" cy="55" r="4" fill="#00f5ff" opacity="0.5"/>
                <circle cx="40" cy="120" r="6" fill="#c77dff" opacity="0.5"/>
                <rect x="18" y="40" width="10" height="30" rx="5" fill="#ffd93d" stroke="#e6c200" strokeWidth="1"/>
                <rect x="122" y="45" width="10" height="30" rx="5" fill="#ffd93d" stroke="#e6c200" strokeWidth="1"/>
                <rect x="30" y="155" width="18" height="25" rx="6" fill="#ffd93d" stroke="#e6c200" strokeWidth="1"/>
                <rect x="102" y="155" width="18" height="25" rx="6" fill="#ffd93d" stroke="#e6c200" strokeWidth="1"/>
                <rect x="55" y="140" width="40" height="8" rx="4" fill="#ff6b9d" opacity="0.7"/>
              </svg>
            </div>
            <h3>Sunny the Sponge</h3>
            <p>Our cheerful yellow mascot who spreads happiness wherever he goes! Sunny loves making new friends and trying every flavor.</p>
            <div className="mascot-fun-fact">
              <span>Fun Fact:</span> Sunny can eat 12 scoops in one sitting!
            </div>
          </div>

          <div className="mascot-card glass">
            <div className="mascot-visual">
              <svg viewBox="0 0 150 180" fill="none">
                <path d="M75 20 L90 65 L135 65 L100 95 L115 140 L75 110 L35 140 L50 95 L15 65 L60 65Z" fill="#ff6b9d" stroke="#e0558a" strokeWidth="2"/>
                <circle cx="62" cy="72" r="7" fill="#001e3c"/>
                <circle cx="88" cy="72" r="7" fill="#001e3c"/>
                <circle cx="64" cy="70" r="3" fill="white"/>
                <circle cx="90" cy="70" r="3" fill="white"/>
                <path d="M65 85 Q75 93 85 85" stroke="#001e3c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="75" cy="55" r="4" fill="#ffd93d" opacity="0.6"/>
                <circle cx="55" cy="105" r="3" fill="#00f5ff" opacity="0.6"/>
                <circle cx="95" cy="100" r="3.5" fill="#c77dff" opacity="0.6"/>
                <circle cx="45" cy="80" r="2.5" fill="#ffd93d" opacity="0.5"/>
                <circle cx="105" cy="75" r="2" fill="#00f5ff" opacity="0.5"/>
              </svg>
            </div>
            <h3>Starla the Starfish</h3>
            <p>Our friendly pink star who always has a smile ready! Starla is the life of every party and knows all the best dance moves.</p>
            <div className="mascot-fun-fact">
              <span>Fun Fact:</span> Starla can spin 360 degrees while holding ice cream!
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <h2 className="section-title">What We Believe In</h2>
        <p className="section-subtitle">The values that guide everything we do</p>
        <div className="values-grid">
          {values.map((value, i) => (
            <div
              key={i}
              className="value-card glass"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section section">
        <h2 className="section-title">Our Journey</h2>
        <p className="section-subtitle">The story of how we grew, one year at a time</p>
        <div className="timeline">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot">
                <span>{milestone.emoji}</span>
              </div>
              <div className="timeline-content glass">
                <span className="timeline-year">{milestone.year}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About