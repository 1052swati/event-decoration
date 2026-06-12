import "./footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Service Areas */}
        <div className="footer-box">
          <h3>Our Service Areas</h3>

          <ul>
            <li>Mumbai</li>
            <li>Navi Mumbai</li>
            <li>kharghar</li>
            <li>kamothe</li>
            <li>kalamboli</li>
            <li>Panvel</li>
            <li>Roadpali</li>
            <li>Nerul</li>
            <li>Seawoods</li>
            <li>sanpada</li>
            <li>Juinagar</li>
            <li>Belapur</li>
            <li>Vashi</li>
            <li>Ratnagiri</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Get In Touch</h3>

          <p>📞 +91 9594239065</p>
          <p>📞 +91 8591094711</p>


          <p>
  📍 Plot No. 39,<br />
  Near D Mart Road,<br />
  Sector 14, Kharghar,<br />
  Navi Mumbai, Panvel,<br />
  Maharashtra - 410210
</p>

          <p>📧 swamieventdecoration@gmail.com</p>

          <a
  className="whatsapp-btn"
  href="https://wa.me/919594239065?text=Hello%20Swami%20Events%20and%20Decoration,%20I%20want%20decoration%20service%20in%20Mumbai/Ratnagiri.%20Please%20share%20details."
  target="_blank"
  rel="noreferrer"
>
  WhatsApp Us
</a>
        </div>

        {/* Social Media */}
        <div className="footer-box">
          <h3>Connect With Us</h3>

          <a
            href="https://www.instagram.com/swamievent_decoration?igsh=MWtlZHBydGg1cWY1eg=="
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            Instagram
          </a>

          <br /><br />

          <a
            href="https://maps.app.goo.gl/LxjfC9pMFz65mYyM9"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            Google Reviews
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Swami Event & Decorations. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;