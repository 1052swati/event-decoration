import { useState } from "react";
import "./faqs.css";

const faqData = [
  {
    question: "What types of decoration services do you provide?",
    answer:
      "We provide Birthday, Baby Shower, Haldi, Mehendi, Anniversary, House Warming, Welcome Baby, Rangoli, First Night and customized decoration services.",
  },
  {
    question: "How much advance booking is required?",
    answer:
      "We recommend booking at least 2-3 days in advance to ensure availability.",
  },
  {
    question: "Do you provide customized decoration themes?",
    answer:
      "Yes, we offer fully customized decoration themes according to your requirements and budget.",
  },
  {
    question: "What are your decoration charges?",
    answer:
      "Our decoration packages start from affordable rates and vary depending on the event type and customization requirements.",
  },
  {
    question: "Do you provide decoration materials?",
    answer:
      "Yes, we provide all required decoration materials including balloons, flowers, backdrops, lights and props.",
  },
  {
    question: "How can I book a decoration service?",
    answer:
      "You can contact us directly through call or WhatsApp and discuss your event requirements.",
  },
];

function FAQs() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>FAQ's</h2>

        <p className="faq-subtitle">
          Find answers to the most common questions about our decoration services.
        </p>

        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>
              <span>{active === index ? "−" : "+"}</span>
            </div>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;