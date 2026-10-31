// import react from 'react'
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Event Decoration</div>

//       <ul className="nav-links">
//         <li>Home</li>
//         <li>Services</li>
//         <li>Gallery</li>
//         <li>Contact</li>
//       </ul>

//       <button className="book-btn">
//         Book Now
//       </button>
//     </nav>
//   );
// }

// export default Navbar;
// import "./Navbar.css";
// import eventlogo from "../../assets/eventlogo.png";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         <img src={eventlogo} alt="Swami Event & Decoration" />
//       </div>

//       <ul className="nav-links">
//         <li>Home</li>
//         <li>Services</li>
//         <li>Gallery</li>
//         <li>Contact</li>
//       </ul>

//       <button className="book-btn">Book Now</button>

//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import "./Navbar.css";
import eventlogo from "../../assets/eventlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={eventlogo} alt="Swami Event & Decoration" />
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
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

        
        
      </ul>

      {/* Desktop Button */}
      <button
        className="book-btn"
        onClick={() =>
          window.open(
            "https://wa.me/918591094711?text=Hello, I am interested in booking an event decoration. Can we connect on a call?",
            "_blank"
          )
        }
      >
        Book Now
      </button>

    </nav>
  );
}

export default Navbar;