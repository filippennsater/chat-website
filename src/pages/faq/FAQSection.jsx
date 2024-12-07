import React, { useState, useEffect } from "react";
import "../../App.css";
import "./FAQSection.scss";
import faqData from "./faqData.json"; // JSON file in the same folder

function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQ-container">
      <div className="QS-container">
        <div className="FAQ-header-container">
          <div className="FAQ-header">FAQs</div>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="Q-container" onClick={() => toggleAnswer(index)}>
            {/* Question and "+" sign on one line */}
            <div className="Q-header-wrapper">
              <div className="Q-header">{faq.question}</div>
              <div className="Q-icon">{activeIndex === index ? "-" : "+"}</div>
            </div>
            {/* Answer below */}
            <div className={`Q-answer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;