import { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Treats', icon: '🍦' },
    { id: 'cones', label: 'Cones', icon: '🍦' },
    { id: 'cups', label: 'Cups', icon: '🍨' },
    { id: 'specials', label: 'Specials', icon: '✨' },
    { id: 'drinks', label: 'Drinks', icon: '🥤' },
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Ocean Berry Blast',
      category: 'cones',
      price: '$4.50',
      description: 'Blue raspberry swirl with real berry chunks and ocean-blue sprinkles',
      color: '#00c6ff',
      emoji: '🫐',
      popular: true,
    },
    {
      id: 2,
      name: 'Coral Crunch',
      category: 'cones',
      price: '$4.75',
      description: 'Strawberry ice cream with crunchy coral-colored candy bits',
      color: '#ff6b9d',
      emoji: '🍓',
      popular: true,
    },
    {
      id: 3,
      name: 'Seaweed Swirl',
      category: 'cones',
      price: '$4.25',
      description: 'Mint chocolate chip with a green swirl and chocolate seaweed shapes',
      color: '#00f5ff',
      emoji: '🥝',
      popular: false,
    },
    {
      id: 4,
      name: 'Treasure Vanilla',
      category: 'cones',
      price: '$3.99',
      description: 'Premium vanilla with edible gold glitter and caramel treasure pieces',
      color: '#ffd93d',
      emoji: '✨',
      popular: true,
    },
    {
      id: 5,
      name: 'Deep Sea Chocolate',
      category: 'cups',
      price: '$5.00',
      description: 'Rich dark chocolate with sea salt caramel and fudge chunks',
      color: '#8B4513',
      emoji: '🍫',
      popular: false,
    },
    {
      id: 6,
      name: 'Bubblegum Bay',
      category: 'cups',
      price: '$4.50',
      description: 'Classic bubblegum flavor with popping candy surprise inside',
      color: '#ff6b9d',
      emoji: '🫧',
      popular: false,
    },
    {
      id: 7,
      name: 'Mermaid Magic',
      category: 'specials',
      price: '$6.50',
      description: 'Layered rainbow ice cream with edible glitter and a mermaid tail cookie',
      color: '#c77dff',
      emoji: '🧜‍♀️',
      popular: true,
    },
    {
      id: 8,
      name: 'Neptune\'s Neapolitan',
      category: 'specials',
      price: '$5.50',
      description: 'Three-layer treat: ocean blue, coral pink, and sandy vanilla',
      color: '#00c6ff',
      emoji: '🌊',
      popular: false,
    },
    {
      id: 9,
      name: 'Jellyfish Jiggle',
      category: 'specials',
      price: '$5.75',
      description: 'Wobbly jelly-inspired dessert with fruit pearls and gummy tentacles',
      color: '#ff6b9d',
      emoji: '🪼',
      popular: false,
    },
    {
      id: 10,
      name: 'Tidal Wave Shake',
      category: 'drinks',
      price: '$5.99',
      description: 'Creamy vanilla shake with blue curacao swirl and whipped cream waves',
      color: '#00c6ff',
      emoji: '🌊',
      popular: true,
    },
    {
      id: 11,
      name: 'Coral Cooler',
      category: 'drinks',
      price: '$4.99',
      description: 'Refreshing strawberry lemonade with floating fruit ice cubes',
      color: '#ff6b9d',
      emoji: '🍹',
      popular: false,
    },
    {
      id: 12,
      name: 'Submarine Float',
      category: 'drinks',
      price: '$5.25',
      description: 'Root beer float with a yellow submarine-shaped cookie on top',
      color: '#ffd93d',
      emoji: '🚢',
      popular: false,
    },
  ]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">Our Magical Menu</h1>
          <p className="menu-subtitle">Dive into our ocean of delicious flavors</p>
        </div>
      </section>

      <section className="menu-section section">
        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className={`menu-card ${item.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {item.popular && (
                <div className="popular-badge">
                  <span>🔥 Popular</span>
                </div>
              )}
              <div className="menu-card-visual">
                <div
                  className="menu-emoji-container"
                  style={{ background: `${item.color}15` }}
                >
                  <span className="menu-emoji">{item.emoji}</span>
                </div>
                <div
                  className="menu-glow"
                  style={{ background: item.color }}
                />
              </div>
              <div className="menu-card-info">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-description">{item.description}</p>
                <button className="menu-add-btn">
                  <span>🛒</span> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Menu