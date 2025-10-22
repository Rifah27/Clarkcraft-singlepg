import React, { useState } from "react";
import "../styles/FAQs.css";

const faqItems = [
  {
    question: "How can I place an order?",
    answer:
      "Simply choose your desired product, add it to your cart, and proceed to checkout. After payment, you’ll receive an order confirmation via email or SMS."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISICING",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISICING ELIT",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tempus, tellus eget ante et bibendum sodales."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <p className="faq-subtitle">BOAT COMPANY</p>
        <h2 className="faq-title">ASK A QUESTION</h2>
        <p className="faq-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed similique saepe voluptatibus iusto ea repudiandae sapiente unde minus odit modi labore sunt consequuntur, quas facere ipsam non qui veritatis distinctio!
        </p>
      </div>

      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
