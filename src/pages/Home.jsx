import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="bubble-bg"></div>

        <h1 className="title">
          🍦 Cool Ice Cream Truck
        </h1>

        <p className="subtitle">
          Dive into the sweetest underwater ice cream world 🌊✨
        </p>

        <div className="hero-buttons">
          <Link to="/locations">
            <button className="btn">📍 Find the Truck</button>
          </Link>

          <Link to="/menu">
            <button className="btn secondary">🍓 Explore Flavors</button>
          </Link>
        </div>

        {/* floating icons */}
        <div className="float ice1">🍦</div>
        <div className="float ice2">🍧</div>
        <div className="float ice3">🍭</div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">🌊 Bikini Bottom Vibes</div>
        <div className="card">🚚 Real Moving Ice Cream Truck</div>
        <div className="card">🍓 Fresh Daily Flavors</div>
      </section>

      {/* STORY */}
      <section className="story">
        <h2>🏝️ Our Story</h2>
        <p>
          A magical ice cream truck inspired by ocean adventures, summer beaches,
          and cartoon-style fun for kids & families.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready for a sweet adventure?</h2>
        <Link to="/contact">
          <button className="btn">📞 Contact Us</button>
        </Link>
      </section>

    </div>
  );
}