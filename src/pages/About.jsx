import './About.css'

const About = () => {
  const milestones = [
    { year: '2021', title: 'The Beginning', desc: 'Started with a dream and a single ice cream truck', emoji: '🚚' },
    { year: '2022', title: 'First Festival', desc: 'Served over 5,000 scoops at the Summer Beach Bash', emoji: '🏖️' },
    { year: '2023', title: 'New Flavors', desc: 'Introduced our signature underwater-themed menu', emoji: '🍦' },
    { year: '2024', title: 'Community Love', desc: 'Voted Best Mobile Dessert in Bikini Bay', emoji: '🏆' },
    { year: '2025', title: 'Going Green', desc: 'Switched to 100% biodegradable packaging', emoji: '🌱' },
    { year: '2026', title: '5 Years Strong', desc: 'Celebrating half a decade of sweet memories', emoji: '🎉' },
  ]

  const values = [
    {
      icon: '🌊',
      title: 'Ocean Conservation',
      desc: 'We donate 5% of profits to ocean cleanup initiatives and marine life protection.',
    },
    {
      icon: '🍦',
      title: 'Quality Ingredients',
      desc: 'Only the freshest, highest-quality ingredients go into every scoop we serve.',
    },
    {
      icon: '😊',
      title: 'Community First',
      desc: 'We believe in bringing people together through the joy of ice cream.',
    },
    {
      icon: '♻️',
      title: 'Sustainability',
      desc: 'Eco-friendly packaging, local sourcing, and zero-waste goals drive everything we do.',
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
              It all began on a hot summer day in 2021 when our founder, dreaming of a world 
              where every neighborhood could enjoy premium ice cream, decided to turn an old 
              delivery truck into a magical mobile dessert shop.
            </p>
            <p>
              Inspired by the wonder of the underwater world, we created Cool Ice Cream Truck. 
              Our mission was simple: bring joy, one scoop at a time, while celebrating the 
              beauty of our oceans.
            </p>
            <p>
              Today, we are proud to be a beloved part of the community, serving up smiles at 
              birthday parties, festivals, and quiet afternoons at the park.
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