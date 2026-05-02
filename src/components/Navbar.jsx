import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/fav1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}  
<Link to="/" className="logo">
  <img src={logo} alt="Cool Ice Logo" />
  <span className="logo-text">
    <span className="cool">Cool</span>{" "}
    <span className="ice">Ice</span>
  </span>
</Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/locations" onClick={() => setOpen(false)}>Locations</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

      </div>
    </nav>
  );
}