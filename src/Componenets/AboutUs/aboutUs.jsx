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
       Welcome to <strong>Swami Event & Decorations,</strong> your trusted partner for creative and memorable event decorations in Navi Mumbai, Mumbai, and Ratnagiri. We specialize in Birthday Decoration, Baby Welcome Decoration, New Bride Welcome Decoration, Anniversary Decoration, House Warming Decoration, Surprise Decoration, Theme Decoration, Wedding Saptapadi Decoration, Flower Decoration, Balloon Decoration, Ghana Decoration, and Real Flower Rangoli Decoration.
Our services also include Retirement Rangoli Decoration, House Party Decoration, Corporate Event Decoration, Temporary Tattoo Art, Nail Art, and Hair Braiding for all special occasions. We focus on unique designs, premium-quality decorations, and customized setups to make every celebration beautiful and unforgettable.
Serving Kharghar, Kamothe, Panvel, Kalamboli, Nerul, Seawoods, Belapur, Airoli, Vashi, Navi Mumbai, Mumbai, and Ratnagiri, we are dedicated to creating stunning decorations that match your style and budget.
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