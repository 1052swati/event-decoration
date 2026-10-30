
import "./Hero.css";
import herovideo from "../../assets/decoration-video.mp4";

function Hero() {
  const message =
    "Hello, I am interested in your event decoration services. Please share the details.";

  return (
    <section className="hero" id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">MINAKSHIART KALAKAAR</span>

        <h1>
          Beautiful Decorations,
          <br />
          <span>Unforgettable Moments</span>
        </h1>

        <p>
          From stunning balloon decorations to elegant wedding
          setups, we make every celebration special.
        </p>

        <div className="hero-buttons">
          <button
            className="book-btn"
            onClick={() =>
              window.open(
                "https://wa.me/919326276820?text=" +
                  encodeURIComponent(message),
                "_blank"
              )
            }
          >
            Book Your Event
          </button>

          <button
            className="call-btn"
            onClick={() => {
              window.location.href = "tel:+919326276820";
            }}
          >
            Call Us
          </button>
        </div>
      </div>

      <div className="hero-bottom-label">
        Making Every Celebration Beautiful
      </div>
    </section>
  );
}

export default Hero;
