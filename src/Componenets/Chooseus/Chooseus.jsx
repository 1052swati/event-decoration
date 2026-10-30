// import "./chooseus.css";

// const features = [
//   {
//     id: 1,
//     title: "Professional Decoration Team",
//     desc: "Experienced team to make every event memorable.",
//   },
//   {
//     id: 2,
//     title: "Affordable Packages",
//     desc: "Beautiful decorations at budget-friendly prices.",
//   },
//   {
//     id: 3,
//     title: "Premium Quality Materials",
//     desc: "Fresh flowers, balloons and premium decor items.",
//   },
//   {
//     id: 4,
//     title: "Customized Themes",
//     desc: "Decorations designed according to your choice.",
//   },
//   {
//     id: 5,
//     title: "On-Time Setup",
//     desc: "We ensure timely decoration before your event starts.",
//   },
//   {
//     id: 6,
//     title: "100% Customer Satisfaction",
//     desc: "Our goal is to make every celebration special.",
//   },
// ];

// function WhyChooseUs() {
//   return (
//     <section className="why-choose">
//       <div className="container">

//         <h2>Why Choose Us</h2>

//         <p className="subtitle">
//           We create beautiful and memorable decorations for every occasion.
//         </p>

//         <div className="features-grid">
//           {features.map((item) => (
//             <div className="feature-card" key={item.id}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


import "./chooseus.css";

const features = [
  {
    id: 1,
    title: "Creative & Unique Designs",
    desc: "We bring fresh ideas and unique designs to make every creation special.",
  },
  {
    id: 2,
    title: "Personalized Services",
    desc: "Every painting and decoration is designed to match your preferences.",
  },
  {
    id: 3,
    title: "Attention to Details",
    desc: "We focus on every little detail to deliver beautiful and elegant results.",
  },
  {
    id: 4,
    title: "Quality & Creativity",
    desc: "We use quality materials and creative ideas in all our work.",
  },
  {
    id: 5,
    title: "Made with Passion",
    desc: "Every artwork and decoration is created with love, care and dedication.",
  },
  {
    id: 6,
    title: "Making Moments Special",
    desc: "From handmade paintings to memorable celebrations, we add a special touch to every occasion.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>The MinakshiArt Difference</h2>

        <p className="subtitle">
          Creativity, quality and a personal touch in every painting
          and decoration we create.
        </p>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
