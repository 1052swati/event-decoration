
import "./aboutUs.css";

function AboutUs() {
  // const handleContact = () => {
  //   window.location.href = "tel:+919326276820";
  // };
const handleContact = () => {
  const message =
    "Hello MinakshiArt Kalakaar, I am interested in your decoration and painting services. Please share the details.";

  window.open(
    `https://wa.me/919326276820?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <section className="about-us" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-tag">WELCOME TO OUR WORLD</p>

          <h2>
            About <span>MinakshiArt Kalakaar</span>
          </h2>

          <div className="about-divider"></div>

          <p className="about-description">
            Welcome to <strong>MinakshiArt Kalakaar</strong>, where creativity
            meets celebration! We specialize in beautiful event decorations
            and artistic designs that make your special moments memorable.
          </p>

          <p className="about-description">
            From birthday parties, baby showers, welcome baby decorations,
            anniversaries, and wedding decorations to balloon decorations and
            real flower rangoli, we bring your ideas to life with creativity
            and care. We also offer traditional rangoli, Ghana decoration,
            temporary tattoo art, nail art, and hair braiding.
          </p>

          <p className="about-description">
            Serving Panvel, Kharghar, Kamothe, Navi Mumbai, Mumbai,
             we create customized decorations to suit your occasion,
            style, and budget. Our goal is to make every celebration beautiful
            and unforgettable!
          </p>

          <button
            type="button"
            className="about-btn"
            onClick={handleContact}
          >
            Contact Us
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
