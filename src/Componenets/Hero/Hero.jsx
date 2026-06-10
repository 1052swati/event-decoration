// import "./Hero.css";
// import herovideo from "../../assets/herovideo.mp4";

// function Hero() {
//   return (
//     <section className="hero" id="home">

//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="video-bg"
//       >
//         <source src={herovideo} type="video/mp4" />
//       </video>

//       <div className="overlay">
//         <div className="hero-content">

//           <h1>
//             Transforming Your Dreams Into
//             Beautiful Celebrations
//           </h1>

//           <p>
//             Wedding, Engagement, Birthday,
//             Baby Shower & Corporate Event
//             Decorations Crafted With Elegance.
//           </p>

//           <div className="hero-buttons">
//             <button className="book-btn">
//               Book Now
//             </button>

//             <button className="call-btn">
//               Call Us
//             </button>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;

import "./Hero.css";
import herovideo from "../../assets/herovideo.mp4";

function Hero() {
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

      <div className="overlay">
        <div className="hero-content">

          <h1>
            Transforming Your Dreams Into
            Beautiful Celebrations
          </h1>

          <p>
            haldi, Mehendi, Anniversary, Birthday,
            Baby Shower & rangoli
            Decorations Crafted With Elegance.
          </p>

          <div className="hero-buttons">

            <button
              className="book-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/919594239065?text=Hello, I am interested in booking an event decoration.",
                  "_blank"
                )
              }
            >
              Book Now
            </button>

            <button
              className="call-btn"
              onClick={() => {
                window.location.href = "tel:+919594239065";
              }}
            >
              Call Us
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;