import { useState } from 'react'
import './Menu.css'

// toppings (KEEP SAME)
import trixLogo from '../assets/trix.png'
import frootLoopsLogo from '../assets/Frootloops.png'
import fruityPebblesLogo from '../assets/fruitypebbles.png'
import ctcLogo from '../assets/Cinnamon.png'
import mmsLogo from '../assets/mm.png'

// CATEGORY IMAGES (YOU REPLACE THESE)
import pic1 from '../assets/cones.png' // cones
import pic2 from '../assets/wafflecones.png' // waffle
import pic3 from '../assets/sundaes.png' // sundaes
import pic4 from '../assets/bubbletea.png' // bubble
import pic5 from '../assets/icedandfl.png' // drinks
import pic6 from '../assets/smoothies.png' // smoothies
import pic7 from '../assets/milkshake.png' // milks
import pic8 from '../assets/snowice.png' // snowballs
import pic9 from '../assets/slushies.png' // slushies

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('cones')

  const categories = [
    { id: 'cones', label: 'Cones', icon: '🍦', image: pic1 },
    { id: 'wafflecones', label: 'Waffle Cones', icon: '🍦', image: pic2 },
    { id: 'sundaes', label: 'Sundaes', icon: '🍨', image: pic3 },
    { id: 'bubble', label: 'Bubble Tea', icon: '🧋', image: pic4 },
    { id: 'drinks', label: 'Ice Drinks & Floats', icon: '🥤', image: pic5 },
    { id: 'smoothies', label: 'Smoothies', icon: '🥤', image: pic6 },
    { id: 'milks', label: 'Milkshakes', icon: '🥛', image: pic7 },
    { id: 'snowballs', label: 'Snowballs & Ice', icon: '❄️', image: pic8 },
    { id: 'slushies', label: 'Slushies', icon: '🧊', image: pic9 },
    { id: 'top', label: 'Topping', icon: '✨' },
  ]

  // TOPPINGS ONLY
  const toppings = [
    { id: 1, name: 'Trix Topping', image: trixLogo },
    { id: 2, name: 'Froot Loops', image: frootLoopsLogo },
    { id: 3, name: 'Fruity Pebbles', image: fruityPebblesLogo },
    { id: 4, name: 'Cinnamon Toast Crunch', image: ctcLogo },
    { id: 5, name: 'M&M', image: mmsLogo },
  ]

  const activeCat = categories.find(c => c.id === activeCategory)

  return (
    <div className="menu-page">

      {/* HERO */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">Our Magical Menu</h1>
          <p className="menu-subtitle">Dive into our ocean of delicious flavors</p>
        </div>
      </section>

      {/* FILTER */}
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

      {/* ===== CATEGORY IMAGE (ALL EXCEPT TOPPING) ===== */}
      {activeCategory !== 'top' && (
        <div className="menu-image-wrapper">
          <img
            src={activeCat.image}
            alt={activeCat.label}
            className="menu-big-image"
          />
        </div>
      )}

      {/* ===== TOPPINGS GRID (UNCHANGED STYLE) ===== */}
      {activeCategory === 'top' && (
        <div className="menu-grid">
          {toppings.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-visual">
                <img src={item.image} alt={item.name} className="menu-logo" />
              </div>
              <div className="menu-card-info">
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Menu