import "./Services.css";
import babyShower from "../../assets/baby-shower.jpeg";
import birthday from "../../assets/happy-birthday.jpeg";
import welcomeBaby from "../../assets/welcome-baby.jpeg";
import jatGhana from "../../assets/jat-ghana.jpeg";
import rangoli from "../../assets/rangoli.jpeg";
import namingCeremony from "../../assets/naming-ceremony.jpeg";
import haldi from "../../assets/haldi.jpeg";
import mehandi from "../../assets/mehandi.jpeg";
import brideWelcome from "../../assets/bride-welcome.jpeg";
import anniversary from "../../assets/anniversary.jpeg";
import houseWarming from "../../assets/house-warming.jpeg";
import retirement from "../../assets/retirement.jpeg";
import firstNight from "../../assets/first-night.jpeg";
import saptapadi from "../../assets/saptapadi.jpeg";
import tattoo from "../../assets/bp-tatoo.jpeg";
import birthdayhouseparty from "../../assets/birthdayparty.jpeg";
import candleLightDinner from "../../assets/candle-light-dinner.jpeg";
import valentinesDay from "../../assets/valentines-day.jpeg";
import surpriseRoom from "../../assets/surprise-room.jpeg";
import rooftopDinner from "../../assets/rooftop-dinner.jpeg";
import carBoot from "../../assets/car-boot.jpeg";

const servicesData = [
  {
    id: 1,
    title: "Baby Shower Decoration",
    image: babyShower,
  },
  {
    id: 2,
    title: "Birthday Decoration",
    image: birthday,
  },
  {
    id: 3,
    title: "Welcome Baby Balloons & Real Flower Rangoli",
    image: welcomeBaby,
  },
  {
    id: 4,
    title: "Jat Ghana Decoration",
    image: jatGhana,
  },
  {
    id: 5,
    title: "Rangoli Decoration",
    image: rangoli,
  },
  {
    id: 6,
    title: "Naming Ceremony Decoration",
    image: namingCeremony,
  },
  {
    id: 7,
    title: "Haldi Decoration",
    image: haldi,
  },
  {
    id: 8,
    title: "Mehendi Decoration",
    image: mehandi,
  },
  {
    id: 9,
    title: "New Bride Welcome Decoration",
    image: brideWelcome,
  },
  {
    id: 10,
    title: "Anniversary Decoration",
    image: anniversary,
  },
  {
    id: 11,
    title: "House Warming Rangoli Decoration",
    image: houseWarming,
  },
  {
    id: 12,
    title: "Retirement Decoration",
    image: retirement,
  },
  {
    id: 13,
    title: "1st Night Decoration",
    image: firstNight,
  },
  {
    id: 14,
    title: "Saptapadi Decoration",
    image: saptapadi,
  },
  {
    id: 15,
    title: "Birthday Party Tattoo Decoration",
    image: tattoo,
  },
   {
    id: 16,
    title: "Birthday House Party Decoration",
    image: birthdayhouseparty,
  },
{
  id: 17,
  title: "Candle Light Dinner Decoration",
  image: candleLightDinner,
},
{
  id: 18,
  title: "Valentine's Day Decoration",
  image: valentinesDay,
},
{
  id: 19,
  title: "Surprise Room Decoration",
  image: surpriseRoom,
},
{
  id: 20,
  title: "Rooftop Candle Light Dinner Decoration",
  image: rooftopDinner,
},
{
  id: 21,
  title: "Car Boot (Dikki) Surprise Decoration",
  image: carBoot,
},
];
function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <h2>Our Services</h2>

        <p className="subtitle">
          We create unforgettable experiences for every occasion.
        </p>

        <div className="services-grid">

          {servicesData.map((service) => (
            <div
              className="service-card"
              key={service.id}
            >
              <img
                src={service.image}
                alt={service.title}
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