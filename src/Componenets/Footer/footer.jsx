
import "./footer.css";

function Footer() {
  const whatsappMessage =
    "Hello MinakshiArt Kalakaar, I am interested in your decoration services. Please share the details.";

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Service Areas */}
        <div className="footer-box">
          <h3>Our Service Areas</h3>
          <ul>
            <li>Mumbai</li>
            <li>Navi Mumbai</li>
            <li>Kharghar</li>
            <li>Kamothe</li>
            <li>Kalamboli</li>
            <li>Panvel</li>
            <li>Roadpali</li>
            <li>Nerul</li>
            <li>Seawoods</li>
            <li>Sanpada</li>
            <li>Juinagar</li>
            <li>Belapur</li>
            <li>Vashi</li>
            
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Get In Touch</h3>

          <p>
            📞{" "}
            <a href="tel:+919326276820">+91 9326276820</a>
          </p>

         <p>
  📍 Orion Mall,<br />
  Near Bus Stand,<br />
  Panvel, Navi Mumbai,<br />
  Maharashtra - 410206
</p>

          <a
            className="whatsapp-btn"
            href={`https://wa.me/919326276820?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Social Media */}
        <div className="footer-box">
          <h3>Connect With Us</h3>

          <a
            href="https://www.instagram.com/minakshiartkalakaar2223/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            Instagram
          </a>

          <a
            href="https://maps.app.goo.gl/cxibiMN3V34osjeZA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            Google Reviews
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MinakshiArt Kalakaar. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
