import "./reviews.css";

import review1 from "../../assets/review1.jpeg";
import review2 from "../../assets/review2.jpeg";
import review3 from "../../assets/review3.jpeg";
import review4 from "../../assets/review4.jpeg";
import review5 from "../../assets/review5.jpeg";
import review6 from "../../assets/review6.jpeg";
import review7 from "../../assets/review7.jpeg";
import review8 from "../../assets/review8.jpeg";
import review9 from "../../assets/review9.jpeg";
import review10 from "../../assets/review10.jpeg";

const reviews = [review1, review2, review3, review4, review5,review6,review7,review8,review9, review10 ];

function Reviews() {
  return (
    <section className="reviews">
      <h2>Google Reviews</h2>

      <p className="reviews-subtitle">
        See what our customers say about our decoration services
      </p>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review} alt={`Review ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;