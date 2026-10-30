import "./Services.css";
import navratri from "../../assets/navratri.jpeg";
import ganpati from "../../assets/ganpati.jpeg";
import diwali from "../../assets/diwali.jpeg";
import christmas from "../../assets/christmas.jpeg";
import independence from "../../assets/independence-day.jpeg";
import wallPainting from "../../assets/wall-painting.jpeg";
import haldi from "../../assets/haldi-decoration.jpeg";
import mehendi from "../../assets/mehendi-decoration.jpeg";
import birthdayTattoo from "../../assets/birthday-tattoo.jpeg";
import anniversary from "../../assets/anniversary-decoration.jpeg";
import ganpatiDecoration from "../../assets/ganpati-decoration.jpeg";
import welcomeBaby from "../../assets/welcome-baby-rangoli.jpeg";
import caricature from "../../assets/caricature-art.jpeg";
import naming from "../../assets/naming-ceremony.jpeg";
import babyShower from "../../assets/baby-shower.jpeg";



const servicesData = [
   { id: 1, title: "Navratri Glass Painting", image: navratri },
  { id: 2, title: "Ganpati Glass Painting", image: ganpati },
  { id: 3, title: "Diwali Glass Painting", image: diwali },
  { id: 4, title: "Christmas Glass Painting", image: christmas },
  { id: 5, title: "Independence Day Glass Painting", image: independence },
  { id: 6, title: "Wall Painting", image: wallPainting },
  { id: 7, title: "Haldi Decoration", image: haldi },
  { id: 8, title: "Mehendi Decoration", image: mehendi },
  { id: 9, title: "Birthday Party Tattoo", image: birthdayTattoo },
  { id: 10, title: "Anniversary Decoration", image: anniversary },
  {id: 11,title: "Ganpati Decoration",image: ganpatiDecoration,},
  {
  id: 12,
  title: "Welcome Baby Balloon & Real Flower Rangoli Decoration",
  image: welcomeBaby,
},
{
  id: 13,
  title: "Caricature Art",
  image: caricature,
},
{
  id: 14,
  title: "Naming Ceremony Decoration",
  image: naming,
},
  {
  id: 15,
  title: "Baby Shower Decoration",
  image: babyShower,
},

 ];


function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>

        <p className="subtitle">
          Beautiful Art & Decorations for Every Special Occasion.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-name">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
