import { useState } from 'react'
import './Menu.css'

// existing toppings
import trixLogo from '../assets/trix.png'
import frootLoopsLogo from '../assets/Frootloops.png'
import fruityPebblesLogo from '../assets/fruitypebbles.png'
import ctcLogo from '../assets/Cinnamon.png'
import mmsLogo from '../assets/mm.png'

// 🆕 NEW TOPPING IMAGES (REPLACE THESE FILES)
import top1 from '../assets/pnt.png' // peanuts
import top2 from '../assets/oreo.png' // oreo
import top3 from '../assets/chcsp.png' // chocolate sprinkles
import top4 from '../assets/spr.png' // rainbow sprinkles

// CATEGORY IMAGES
import pic1 from '../assets/cones.png'
import pic2 from '../assets/wafflecones.png'
import pic3 from '../assets/sundaes.png'
import pic4 from '../assets/bubbletea.png'
import pic5 from '../assets/icedandfl.png'
import pic6 from '../assets/smoothies.png'
import pic7 from '../assets/milkshake.png'
import pic8 from '../assets/snowice.png'
import pic9 from '../assets/slushies.png'

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

  const toppings = [
    { id: 1, name: 'Trix Topping', image: trixLogo },
    { id: 2, name: 'Froot Loops', image: frootLoopsLogo },
    { id: 3, name: 'Fruity Pebbles', image: fruityPebblesLogo },
    { id: 4, name: 'Cinnamon Toast Crunch', image: ctcLogo },
    { id: 5, name: 'M&M', image: mmsLogo },

    // 🆕 NEW TOPPINGS
    { id: 6, name: 'Peanuts', image: top1 },
    { id: 7, name: 'Oreo Crumble', image: top2 },
    { id: 8, name: 'Chocolate Sprinkles', image: top3 },
    { id: 9, name: 'Rainbow Sprinkles', image: top4 },
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

      {/* CATEGORY IMAGE */}
      {activeCategory !== 'top' && (
        <div className="menu-image-wrapper">
          <img
            src={activeCat.image}
            alt={activeCat.label}
            className="menu-big-image"
          />
        </div>
      )}

      {/* CTA BUTTON */}
      {(activeCategory === 'wafflecones' || activeCategory === 'sundaes') && (
        <div className="topping-cta">
          <button
            className="topping-btn"
            onClick={() => {
              setActiveCategory('top')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            ✨ Customize with Toppings
          </button>
        </div>
      )}

      {/* TOPPINGS GRID */}
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