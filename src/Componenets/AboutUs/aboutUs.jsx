// import "./aboutUs.css";

// function AboutUs() {
//   return (
//     <section className="about-us">
//       <div className="about-container">

//         <div className="about-content">
//           <h2>About Us</h2>

//           <p>
//             Welcome to <strong>Swami Event & Decorations.</strong> We specialize in creating
//             beautiful and memorable decorations for all types of celebrations.
//             From birthdays and baby showers to haldi, mehendi, anniversaries,
//             housewarming ceremonies, and customized themes, we bring your
//             vision to life with creativity and attention to detail.
//           </p>

//           <p>
//             Our experienced team focuses on quality decoration, timely setup,
//             and customer satisfaction. We believe every celebration deserves a
//             unique touch, and we work closely with our clients to make every
//             event special and unforgettable.
//           </p>

//           <button
//   className="about-btn"
//   onClick={() => window.location.href = "tel:+918591094711"}
// >
//   Contact Us
// </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default AboutUs;

import "./aboutUs.css";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">

        <div className="about-content">
          <h2>About Us</h2>

          <p>
            Welcome to <strong>Swami Event & Decorations.</strong> We specialize in creating
            beautiful and memorable decorations for all types of celebrations.
            From birthdays and baby showers to haldi, mehendi, anniversaries,
            housewarming ceremonies, and customized themes, we bring your vision
            to life with creativity and attention to detail.
          </p>

          <p>
            Our experienced team focuses on quality decoration, timely setup,
            and customer satisfaction. We believe every celebration deserves a
            unique touch, and we work closely with our clients to make every
            event special and unforgettable.
          </p>

          <button
            className="about-btn"
            onClick={() => {
              window.location.href = "tel:+919594239065";
            }}
          >
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutUs;