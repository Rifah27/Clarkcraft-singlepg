// File: components/FAQSection.jsx
import React, { useState } from "react";
import "../styles/FAQs.css";

const faqItems = [
  {
    question: "LOREM IPSUM DOLOR SIT AMET",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tempus, tellus eget ante et bibendum sodales."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISICING",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISICING ELIT",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tempus, tellus eget ante et bibendum sodales."
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUER",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
                {activeIndex === index ? "\u2191" : "\u2193"}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
