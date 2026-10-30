
import { useState } from "react";
import "./Navbar.css";
import minakshiLogo from "../../assets/minakshi-logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* MinakshiArt Kalakaar Logo */}
      <div className="logo">
        <img
          src={minakshiLogo}
          alt="MinakshiArt Kalakaar"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>Art & Services</a>
        </li>

        <li>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
        </li>

        <li>
          <a href="#footer" onClick={closeMenu}>Contact</a>
        </li>
      </ul>

      {/* Contact Button */}
      <button
        className="book-btn"
        onClick={() =>
          window.open(
            "https://wa.me/9326276820?text=Hello, I am interested in booking. can we connect",
            "_blank"
          )
        }
      >
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
