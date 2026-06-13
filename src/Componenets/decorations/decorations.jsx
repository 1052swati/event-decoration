import "./decorations.css";
import { useState } from "react";

import babyShower1 from "../../assets/babyShower1.jpeg";
import babyShower2 from "../../assets/babyShower2.jpeg";
import babyShower3 from "../../assets/babyShower3.jpeg";
import birthday1 from "../../assets/birthday1.jpeg"
import birthday2 from "../../assets/birthday2.jpeg"
import birthday3 from "../../assets/birthday3.jpeg"
import welcomeBaby1 from "../../assets/welcomeBaby1.jpeg"
import welcomeBaby2 from "../../assets/welcomeBaby2.jpeg"
import welcomeBaby3 from "../../assets/welcomeBaby3.jpeg"
import jatGhana1 from "../../assets/jatGhana1.jpeg"
import jatGhana2 from "../../assets/jatGhana2.jpeg"
import jatGhana3 from "../../assets/jatGhana3.jpeg"
import rangoli1 from "../../assets/rangoli1.jpeg"
import rangoli2 from "../../assets/rangoli2.jpeg"
import rangoli3 from "../../assets/rangoli3.jpeg"
import naming1 from "../../assets/naming1.jpeg"
import naming2 from "../../assets/naming2.jpeg"
import naming3 from "../../assets/naming3.jpeg"
import haldi1 from "../../assets/haldi1.jpeg"
import haldi2 from "../../assets/haldi2.jpeg"
import haldi3 from "../../assets/haldi3.jpeg"
import mehendi1 from "../../assets/mehendi1.jpeg"
import mehendi2 from "../../assets/mehendi2.jpeg"
import mehendi3 from "../../assets/mehendi3.jpeg"
import bride1 from "../../assets/bride1.jpeg"
import bride2 from "../../assets/bride2.jpeg"
import bride3 from "../../assets/bride3.jpeg"
import Anniversary1 from "../../assets/Anniversary1.jpeg"
import Anniversary2 from "../../assets/Anniversary2.jpeg"
import Anniversary3 from "../../assets/Anniversary3.jpeg"
import house1 from "../../assets/house1.jpeg"
import house2 from "../../assets/house2.jpeg"
import house3 from "../../assets/house3.jpeg"
import retirement1 from "../../assets/retirement1.jpeg"
import retirement2 from "../../assets/retirement2.jpeg"
import retirement3 from "../../assets/retirement3.jpeg"
import firstNight1 from "../../assets/firstNight1.jpeg"
import firstNight2 from "../../assets/firstNight2.jpeg"
import firstNight3 from "../../assets/firstNight3.jpeg"
import saptapadi1 from "../../assets/saptapadi1.jpeg"
import saptapadi2 from "../../assets/saptapadi2.jpeg"
import saptapadi3 from "../../assets/saptapadi3.jpeg"
import tattoo1 from "../../assets/tattoo1.jpeg"
import tattoo2 from "../../assets/tattoo2.jpeg"
import tattoo3 from "../../assets/tattoo3.jpeg"
import houseparty1 from "../../assets/houseparty1.jpeg"
import houseparty2 from "../../assets/houseparty2.jpeg"
import houseparty3 from "../../assets/houseparty3.jpeg"
import candleLightDinner1 from "../../assets/candleLightDinner1.jpeg";
import candleLightDinner2 from "../../assets/candleLightDinner2.jpeg";
import candleLightDinner3 from "../../assets/candleLightDinner3.jpeg";

import valentines1 from "../../assets/valentines1.jpeg";
import valentines2 from "../../assets/valentines2.jpeg";
import valentines3 from "../../assets/valentines3.jpeg";

import surpriseRoom1 from "../../assets/surpriseRoom1.jpeg";
import surpriseRoom2 from "../../assets/surpriseRoom2.jpeg";
import surpriseRoom3 from "../../assets/surpriseRoom3.jpeg";

import rooftop1 from "../../assets/rooftop1.jpeg";
import rooftop2 from "../../assets/rooftop2.jpeg";
import rooftop3 from "../../assets/rooftop3.jpeg";

import carBoot1 from "../../assets/carBoot1.jpeg";
import carBoot2 from "../../assets/carBoot2.jpeg";
import carBoot3 from "../../assets/carBoot3.jpeg";

export const decorations = [
  {
    id: 1,
    title: "Baby Shower Decoration",
    price: "₹3,000 - ₹15,000",
    images: [babyShower1, babyShower2, babyShower3],
  },
  {
    id: 2,
    title: "Birthday Decoration",
    price: "₹2,000 - ₹16,000",
    images: [birthday1, birthday2, birthday3],
  },
  {
    id: 3,
    title: "Welcome Baby Balloons & Real Flower Rangoli",
    price: "₹3,000 - ₹14,000",
    images: [welcomeBaby1, welcomeBaby2, welcomeBaby3],
  },
  {
    id: 4,
    title: "Jat Ghana Decoration",
    price: "₹4,000 - ₹9,000",
    images: [jatGhana1, jatGhana2, jatGhana3],
  },
  {
    id: 5,
    title: "Rangoli Decoration",
    price: "₹3,000 - ₹10,000",
    images: [rangoli1, rangoli2, rangoli3],
  },
  {
    id: 6,
    title: "Naming Ceremony Decoration",
    price: "₹4,000 - ₹12,000",
    images: [naming1, naming2, naming3],
  },
  {
    id: 7,
    title: "Haldi Decoration",
    price: "₹5,000 - ₹15,000",
    images: [haldi1, haldi2, haldi3],
  },
  {
    id: 8,
    title: "Mehendi Decoration",
    price: "₹5,000 - ₹10,000",
    images: [mehendi1, mehendi2, mehendi3],
  },
  {
    id: 9,
    title: "New Bride Welcome Decoration",
    price: "₹5,000 - ₹13,000",
    images: [bride1, bride2, bride3],
  },
  {
    id: 10,
    title: "Anniversary Decoration",
    price: "₹3,000 - ₹13,000",
    images: [Anniversary1, Anniversary2,Anniversary3],
  },
  {
    id: 11,
    title: "House Warming Rangoli Decoration",
    price: "₹7500 - ₹20,000",
    images: [house1, house2, house3],
  },
  {
    id: 12,
    title: "Retirement Decoration",
    price: "₹4,000 - ₹10,000",
    images: [retirement1, retirement2, retirement3],
  },
  {
    id: 13,
    title: "1st Night Decoration",
    price: "₹3,000 - ₹7,000",
    images: [firstNight1, firstNight2, firstNight3],
  },
  {
    id: 14,
    title: "Saptapadi Decoration",
    price: "₹7500 - ₹15,000",
    images: [saptapadi1, saptapadi2, saptapadi3],
  },
  {
    id: 15,
    title: "Birthday Party Tattoo Decoration",
    price: "₹1500 - ₹25000",
    images: [tattoo1, tattoo2, tattoo3],
  },
  {
    id: 16,
    title: "Birthday House Party Decoration",
    price: "₹2,000 - ₹5,000",
    images: [houseparty1, houseparty2, houseparty3],
  },
  {
  id: 17,
  title: "Candle Light Dinner Decoration",
  price: "₹3,000 - ₹10,000",
  images: [candleLightDinner1, candleLightDinner2, candleLightDinner3],
},
{
  id: 18,
  title: "Valentine's Day Decoration",
  price: "₹3,000 - ₹10,000",
  images: [valentines1, valentines2, valentines3],
},
{
  id: 19,
  title: "Surprise Room Decoration",
  price: "₹5,000 - ₹12,000",
  images: [surpriseRoom1, surpriseRoom2, surpriseRoom3],
},
{
  id: 20,
  title: "Rooftop Candle Light Dinner Decoration",
  price: "₹5,000 - ₹15,000",
  images: [rooftop1, rooftop2, rooftop3],
},
{
  id: 21,
  title: "Car Boot (Dikki) Surprise Decoration",
  price: "₹3,500 - ₹7,000",
  images: [carBoot1, carBoot2, carBoot3],
},
];

function DecorationCard({ item }) {
  const [mainImage, setMainImage] = useState(item.images[0]);

  return (
    <div className="decor-card">

      <div className="img-box">
        <img src={mainImage} alt={item.title} />
      </div>

      <h3>{item.title}</h3>

      <p className="price">{item.price}</p>

      <div className="thumbs">
        {item.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <button
        className="book-btn"
        onClick={() =>
          window.open(
            `https://wa.me/919594239065?text=Hello, Swami Events & Decoration, I want ${item.title} service in Mumbai/Ratnagiri. Please share details.`,
             target="_blank"
          )
        }
      >
        Book Now
      </button>

    </div>
  );
}

function Decorations() {
  return (
    <section className="decorations">
      <h2>Our Decorations</h2>
      <p className="subtitle">
        Beautiful setups for every occasion
      </p>

      {/* <div className="decor-grid">
        {decorations.map((item) => (
          <div className="decor-card" key={item.id}>

            
            <div className="img-box">
              <img src={item.images[0]} alt={item.title} />
            </div>

            
            <h3>{item.title}</h3>

            
            <p className="price">{item.price}</p>

            
            <div className="thumbs">
              {item.images.map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div>

            
            <button
              className="book-btn"
              onClick={() =>
                window.open(
                  `https://wa.me/919594239065?text=Hello, Swami Events & Decoration,I want ${item.title} service in Mumbai/Ratnagiri. Please share details.`,
                  "_blank"
                )
              }
            >
              Book Now
            </button>

          </div>
        ))}
      </div> */}
        <div className="decor-grid">
        {decorations.map((item) => (
          <DecorationCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </section>
  );
}

export default Decorations;