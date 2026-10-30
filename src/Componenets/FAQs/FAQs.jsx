
import { useState } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "What decoration services do you offer?",
    answer:
      "We offer birthday decorations, baby showers, welcome baby decorations, Haldi, Mehendi, anniversaries, wedding decorations, real flower rangoli, glass painting, wall painting,tatoo, and customized event setups.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide our services in Panvel, Kharghar, Kamothe, Navi Mumbai,and  Mumbai. Please contact us to confirm availability for your location.",
  },
  {
    question: "How early should I book my decoration?",
    answer:
      "We recommend booking 2–3 days in advance. For larger events or customized setups, booking earlier is recommended.",
  },
  {
    question: "Do you provide customized decoration themes?",
    answer:
      "Yes! We customize decorations according to your occasion, preferred theme, space, and budget.",
  },
  {
    question: "What are your decoration charges?",
    answer:
      "Prices depend on the event, decoration style, materials, and setup requirements. Contact us for a quote based on your needs.",
  },
  {
    question: "Do you bring your own decoration materials?",
    answer:
      "Yes, decoration materials can be arranged according to the selected setup and package. Please discuss your requirements with us before booking.",
  },
  {
    question: "How can I book your services?",
    answer:
      "You can call us at +91 9326276820 or contact us on WhatsApp to discuss your event date, location, decoration theme, and budget.",
  },
];

function FAQs() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive((previous) => (previous === index ? null : index));
  };

  return (
    <section className="faq" id="faqs">
      <div className="faq-container">
        <p className="faq-tag">HAVE QUESTIONS?</p>

        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>

        <p className="faq-subtitle">
          Find answers to common questions about MinakshiArt Kalakaar
          decoration services.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${active === index ? "active" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={active === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
