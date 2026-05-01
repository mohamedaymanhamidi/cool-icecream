import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">

      <h1 style={{ fontSize: "40px" }}>
        🍦 Cool Ice Cream Truck
      </h1>

      <p style={{ fontSize: "18px" }}>
        The MOST FUN ice cream experience on wheels 🚚✨
      </p>

      {/* Hero Card */}
      <div className="card">
        <h2>🌊 Catch Us Today!</h2>
        <p>Find our truck near beaches & parks</p>

        <Link to="/locations">
          <button className="btn">📍 Track the Truck</button>
        </Link>
      </div>

      {/* Menu highlight */}
      <div className="card">
        <h2>🔥 Top Flavors</h2>
        <p>🍓 Strawberry Splash • 🍫 Chocolate Wave • 🌈 Rainbow Sundae</p>

        <Link to="/menu">
          <button className="btn">View Full Menu</button>
        </Link>
      </div>

      {/* Social proof */}
      <div className="card">
        <h2>💬 People Love Us</h2>
        <p>"Best ice cream in town!" ⭐⭐⭐⭐⭐</p>
      </div>

    </div>
  );
}