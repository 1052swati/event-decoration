import "./chooseus.css";

const features = [
  {
    id: 1,
    title: "Professional Decoration Team",
    desc: "Experienced team to make every event memorable.",
  },
  {
    id: 2,
    title: "Affordable Packages",
    desc: "Beautiful decorations at budget-friendly prices.",
  },
  {
    id: 3,
    title: "Premium Quality Materials",
    desc: "Fresh flowers, balloons and premium decor items.",
  },
  {
    id: 4,
    title: "Customized Themes",
    desc: "Decorations designed according to your choice.",
  },
  {
    id: 5,
    title: "On-Time Setup",
    desc: "We ensure timely decoration before your event starts.",
  },
  {
    id: 6,
    title: "100% Customer Satisfaction",
    desc: "Our goal is to make every celebration special.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">

        <h2>Why Choose Us</h2>

        <p className="subtitle">
          We create beautiful and memorable decorations for every occasion.
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