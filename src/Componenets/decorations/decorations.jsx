import "./decorations.css";
import { useState } from "react";

// Ganpati Glass Painting
import ganapti1 from "../../assets/ganapti1.jpeg";
import ganapti2 from "../../assets/ganapti2.jpeg";
import ganapti3 from "../../assets/ganapti3.jpeg";

// Navratri Glass Painting
import navratri1 from "../../assets/navratri1.jpeg";
import navratri2 from "../../assets/navratri2.jpeg";
import navratri3 from "../../assets/navratri3.jpeg";

import independence1 from "../../assets/independence1.jpeg";
import independence2 from "../../assets/independence2.jpeg";
import independence3 from "../../assets/independence3.jpeg";
// Diwali Glass Painting
import diwali1 from "../../assets/diwali1.jpeg";
import diwali2 from "../../assets/diwali2.jpeg";
import diwali3 from "../../assets/diwali3.jpeg";

// Christmas Glass Painting
import christmas1 from "../../assets/christmas1.jpeg";
import christmas2 from "../../assets/christmas2.jpeg";
import christmas3 from "../../assets/christmas3.jpeg";

// Wall Painting
import wall1 from "../../assets/wall1.jpeg";
import wall2 from "../../assets/wall2.jpeg";
import wall3 from "../../assets/wall3.jpeg";

// Ganpati Decoration
import ganpatidecor1 from "../../assets/ganpatidecor1.jpeg";
import ganpatidecor2 from "../../assets/ganpatidecor2.jpeg";
import ganpatidecor3 from "../../assets/ganpatidecor3.jpeg";
import babyShower1 from "../../assets/babyShower1.jpeg";
import babyShower2 from "../../assets/babyShower2.jpeg";
import babyShower3 from "../../assets/babyShower3.jpeg";
import birthday1 from "../../assets/birthday1.jpeg"
import birthday2 from "../../assets/birthday2.jpeg"
import birthday3 from "../../assets/birthday3.jpeg"
import welcomeBaby1 from "../../assets/welcomeBaby1.jpeg"
import welcomeBaby2 from "../../assets/welcomeBaby2.jpeg"
import welcomeBaby3 from "../../assets/welcomeBaby3.jpeg"
import naming1 from "../../assets/naming1.jpeg"
import naming2 from "../../assets/naming2.jpeg"
import naming3 from "../../assets/naming3.jpeg"
import haldi1 from "../../assets/haldi1.jpeg"
import haldi2 from "../../assets/haldi2.jpeg"
import haldi3 from "../../assets/haldi3.jpeg"
import mehendi1 from "../../assets/mehendi1.jpeg"
import mehendi2 from "../../assets/mehendi2.jpeg"
import mehendi3 from "../../assets/mehendi3.jpeg"
import Anniversary1 from "../../assets/Anniversary1.jpeg"
import Anniversary2 from "../../assets/Anniversary2.jpeg"
import Anniversary3 from "../../assets/Anniversary3.jpeg"
import tattoo1 from "../../assets/tattoo1.jpeg"
import tattoo2 from "../../assets/tattoo2.jpeg"
import tattoo3 from "../../assets/tattoo3.jpeg"
import caricature1 from "../../assets/caricature1.jpeg"
import caricature2 from "../../assets/caricature2.jpeg"
import caricature3 from "../../assets/caricature3.jpeg"



export const decorations = [

  {
  id: 1,
  title: "Ganpati Glass Painting",
  price: "Price on Request",
  images: [ganapti1, ganapti2, ganapti3],
},
{
  id: 2,
  title: "Navratri Glass Painting",
  price: "Price on Request",
  images: [navratri1, navratri2, navratri3],
},
{
  id: 3,
  title: "Independence Day Glass Painting",
  price: "Price on Request",
  images: [independence1, independence2, independence3],
},
{
  id: 4,
  title: "Diwali Glass Painting",
  price: "Price on Request",
  images: [diwali1, diwali2, diwali3],
},
{
  id: 5,
  title: "Christmas Glass Painting",
  price: "Price on Request",
  images: [christmas1, christmas2, christmas3],
},
{
  id: 6,
  title: "Wall Painting",
  price: "Price on Request",
  images: [wall1, wall2, wall3],
},
{
  id: 7,
  title: "Ganpati Decoration",
  price: "Price on Request",
  images: [ganpatidecor1, ganpatidecor2, ganpatidecor3],
},
  {
    id: 8,
    title: "Baby Shower Decoration",
    price: "₹3,000 - ₹15,000",
    images: [babyShower1, babyShower2, babyShower3],
  },
  {
    id: 9,
    title: "Birthday Decoration",
    price: "₹3,000 - ₹16,000",
    images: [birthday1, birthday2, birthday3],
  },
  {
    id: 10,
    title: "Welcome Baby Balloons & Real Flower Rangoli",
    price: "₹3,000 - ₹14,000",
    images: [welcomeBaby1, welcomeBaby2, welcomeBaby3],
  },
 
 
  {
    id: 11,
    title: "Naming Ceremony Decoration",
    price: "₹4,000 - ₹12,000",
    images: [naming1, naming2, naming3],
  },
  {
    id: 12,
    title: "Haldi Decoration",
    price: "₹5,000 - ₹15,000",
    images: [haldi1, haldi2, haldi3],
  },
  {
    id: 13,
    title: "Mehendi Decoration",
    price: "₹5,000 - ₹10,000",
    images: [mehendi1, mehendi2, mehendi3],
  },
  
  {
    id: 14,
    title: "Anniversary Decoration",
    price: "₹3,000 - ₹13,000",
    images: [Anniversary1, Anniversary2,Anniversary3],
  },
 
 
 
  {
    id: 15,
    title: "Birthday Party Tattoo Decoration",
    price: "₹1500 - ₹2500",
    images: [tattoo1, tattoo2, tattoo3],
  },
 
  {
    id: 16,
    title:"Caricature",
    price:"price on request",
    images: [caricature1, caricature2, caricature3],
  }
];

// function DecorationCard({ item }) {
//   const [mainImage, setMainImage] = useState(item.images[0]);

//   return (
//     <div className="decor-card">

//       <div className="img-box">
//         <img src={mainImage} alt={item.title} />
//       </div>

//       <h3>{item.title}</h3>

//       <p className="price">{item.price}</p>

//       <div className="thumbs">
//         {item.images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt=""
//             onClick={() => setMainImage(img)}
//           />
//         ))}
//       </div>

    
//       <button
//   className="book-btn"
//   onClick={() =>
//     window.open(
//       `https://wa.me/919326276820?text=${encodeURIComponent(
//         `Hello, Swami Events & Decoration, I want ${item.title} service in Mumbai/Ratnagiri. Please share details.`
//       )}`,
//       "_blank"
//     )
//   }
// >
//   Book Now
// </button>

//     </div>
//   );
// }

// function Decorations() {
//   return (
//     <section className="decorations">
//       <h2>Our Decorations</h2>
//       <p className="subtitle">
//         Beautiful setups for every occasion
//       </p>

     
//         <div className="decor-grid">
//         {decorations.map((item) => (
//           <DecorationCard
//             key={item.id}
//             item={item}
//           />
//         ))}
//       </div>

//     </section>
//   );
// }

// export default Decorations;

function DecorationCard({ item }) {
  const [mainImage, setMainImage] = useState(item.images[0]);

  return (
    <div className="decor-card">
      <div className="img-box">
        <img src={mainImage} alt={item.title} />
      </div>

      <div className="decor-info">
        <h3>{item.title}</h3>

        <p className="price">{item.price}</p>

        <div className="thumbs">
          {item.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${item.title} ${index + 1}`}
              className={mainImage === img ? "active-thumb" : ""}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <button
          className="book-btn"
          onClick={() =>
            window.open(
              `https://wa.me/919326276820?text=${encodeURIComponent(
                `Hello MinakshiArt Kalakaar, I want ${item.title} service. Please share details.`
              )}`,
              "_blank"
            )
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function Decorations() {
  return (
    <section className="decorations">
      <div className="decor-heading">
        <h2>Our Decorations</h2>

        <p className="subtitle">
          Beautiful setups and creative designs for every special occasion.
          We make your celebrations more memorable with our artistic touch.
        </p>
      </div>

      <div className="decor-grid">
        {decorations.map((item) => (
          <DecorationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Decorations;