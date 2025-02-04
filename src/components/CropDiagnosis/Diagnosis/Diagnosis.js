import React, { useState } from "react";
import styles from "./diagnosis.module.css";

const Diagnosis = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const learningMaterials = [
    { id: 1, title: "Understanding Crop Diseases", content: "Learn about different types of crop diseases and their causes." },
    { id: 2, title: "Effective Pest Control", content: "Best practices for controlling pests without harming the environment." },
    { id: 3, title: "Soil Health & Fertilization", content: "Improve soil fertility using organic and inorganic fertilizers." },
  ];

  const faqs = [
    { id: 1, question: "What causes crop diseases?", answer: "Crop diseases are caused by fungi, bacteria, viruses, and poor soil conditions." },
    { id: 2, question: "How can I prevent pest infestations?", answer: "Use crop rotation, natural predators, and organic pesticides to reduce pests." },
    { id: 3, question: "What is the best way to improve soil quality?", answer: "Adding compost, practicing crop rotation, and using organic fertilizers help improve soil." },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Educative Section</h2>

      {/* Learning Materials with Search */}
      <div className={styles.section}>
        <h3>Learning Materials</h3>
        <input
          type="text"
          placeholder="Search topics..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul className={styles.list}>
          {learningMaterials
            .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <li key={item.id} className={styles.listItem}>
                <strong>{item.title}:</strong> {item.content}
              </li>
            ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className={styles.section}>
        <h3>FAQs</h3>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <button onClick={() => setFaqOpen(faqOpen === faq.id ? null : faq.id)} className={styles.faqButton}>
              {faq.question}
            </button>
            {faqOpen === faq.id && <p className={styles.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Discussion Forum */}
      <div className={styles.section}>
        <h3>Discussion Forum</h3>
        <p>Join discussions with other farmers and experts.</p>
      </div>

      {/* Expert Support */}
      <div className={styles.section}>
        <h3>Expert Support</h3>
        <p>Get assistance from agricultural experts via email, phone, or scheduled consultations.</p>
      </div>
    </div>
  );
};

export default Diagnosis;
