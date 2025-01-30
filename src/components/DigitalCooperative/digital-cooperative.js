import React, { useState } from "react";
import styles from './digital-cooperative.module.css';
import img1 from '../../assets/sMediaService/main.png';
import img2 from '../../assets/sMediaService/middle1.png';
import img3 from '../../assets/sMediaService/bottom1.png';

const faqs = [
    {
        question: "What is a digital cooperative and how does it work?",
        answer: "A digital cooperative is an online platform where farmers collaborate to buy inputs in bulk, sell produce together, and access financial services for better profits."
    },
    {
        question: "Do I have to pay to join a cooperative?",
        answer: "No, joining a cooperative is free. However, members may contribute to bulk purchases or shared services."
    },
    {
        question: "How do I place bulk orders?",
        answer: "After joining a cooperative, you can place bulk orders through the platform by selecting the required inputs and pooling resources with other farmers."
    },
    {
        question: "Is my money safe when using FarmUnity?",
        answer: "Yes, FarmUnity uses secure payment methods and verified transactions to ensure your money is protected."
    },
    {
        question: "Can I access FarmUnity without a smartphone?",
        answer: "Yes, FarmUnity is also accessible via USSD codes and feature phones for farmers without smartphones."
    }
];

const DigitalCooperative = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div>
                {/* Hero Section */}
                <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Lower Costs, Higher Profits</p>
                            <p className={styles.headTop}>Join a Digital Farming Cooperative!</p>
                            <p className={styles.identityTop}>Boost your farming business with bulk purchasing and direct market access.</p>
                            <p className={styles.content}>By joining a digital farming cooperative, farmers can reduce costs through bulk purchasing and directly access markets, improving profitability and efficiency.</p>
                            <div className={styles.ctaButtons}>
                                <a href="/signUp" className={styles.ctaButton}>Join a Cooperative</a>
                                <a href="#features" className={styles.ctaButton}>Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img src={img1} alt="Farmers benefiting from cooperatives" className={styles.img1} />
                    </div>
                </div>

                {/* About Digital Cooperatives Section */}
                <div className="row mt-5 mx-0">
                    <div className="col-12 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>What is a Digital Cooperative?</p>
                            <p className={styles.identityTop}>
                                FarmUnity empowers farmers by enabling them to work together to reduce costs, increase profits, and access essential services.
                            </p>
                            <p className={styles.content}>
                                By joining a digital cooperative, farmers can:
                            </p>
                            <ul className={styles.benefitsList}>
                                <li>💰 <strong>Buy inputs in bulk</strong> at lower prices.</li>
                                <li>📈 <strong>Sell produce together</strong> for better bargaining power.</li>
                                <li>🏦 <strong>Access loans & insurance</strong> for financial security.</li>
                                <li>🌱 <strong>Get expert agricultural advice</strong> to improve yields.</li>
                            </ul>
                            <div className={styles.infographic}>
                                <p className={styles.infographicTitle}>How It Works</p>
                                <div className={styles.processFlow}>
                                    <span>👩‍🌾 Farmers Join</span> ➝ 
                                    <span>🤝 Pool Resources</span> ➝ 
                                    <span>🛒 Buy Together</span> ➝ 
                                    <span>📦 Sell at Better Prices</span> ➝ 
                                    <span>💵 Earn More Profits</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="row mt-5 mx-0">
                    <div className="col-12 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>How It Works</p>
                            <p className={styles.identityTop}>
                                Joining a digital cooperative is simple. Follow these steps to start benefiting from bulk purchases, better market access, and financial support.
                            </p>
                            <div className={styles.stepsContainer}>
                                <div className={styles.step}>
                                    <span className={styles.stepIcon}>1️⃣</span>
                                    <p className={styles.stepTitle}>Sign Up</p>
                                    <p className={styles.stepDescription}>Register and join a cooperative in your area.</p>
                                </div>
                                <div className={styles.step}>
                                    <span className={styles.stepIcon}>2️⃣</span>
                                    <p className={styles.stepTitle}>Contribute to Bulk Purchases</p>
                                    <p className={styles.stepDescription}>Order farm inputs together with other farmers to save costs.</p>
                                </div>
                                <div className={styles.step}>
                                    <span className={styles.stepIcon}>3️⃣</span>
                                    <p className={styles.stepTitle}>Sell Directly to Buyers</p>
                                    <p className={styles.stepDescription}>Access better market prices and improve profits.</p>
                                </div>
                                <div className={styles.step}>
                                    <span className={styles.stepIcon}>4️⃣</span>
                                    <p className={styles.stepTitle}>Get Financial & Storage Support</p>
                                    <p className={styles.stepDescription}>Access loans, insurance, and warehouse storage for better planning.</p>
                                </div>
                                <div className={styles.step}>
                                    <span className={styles.stepIcon}>5️⃣</span>
                                    <p className={styles.stepTitle}>Learn & Improve</p>
                                    <p className={styles.stepDescription}>Receive expert advice and real-time agricultural insights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features & Benefits Section */}
                <div id="features" className="row mt-5 mx-0">
                    {/* Farmers' Benefits */}
                    <div className="col-md-6 px-0 order-md-2">
                        <img src={img2} alt="Farmers benefiting" className={styles.img2} />
                    </div>
                    <div className="col-md-6 px-0 order-md-1">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Benefits for Farmers</p>
                            <ul className={styles.featuresList}>
                                <li><span className={styles.featureIcon}>💰</span> <strong>Bulk Buying Discounts</strong> – Get up to 30% lower input costs.</li>
                                <li><span className={styles.featureIcon}>🌍</span> <strong>Direct Market Access</strong> – Sell directly to verified buyers.</li>
                                <li><span className={styles.featureIcon}>🏦</span> <strong>Financial Services</strong> – Access microloans and insurance.</li>
                                <li><span className={styles.featureIcon}>📦</span> <strong>Storage & Logistics Support</strong> – Reduce post-harvest losses with warehousing.</li>
                                <li><span className={styles.featureIcon}>📚</span> <strong>Expert Advice</strong> – Learn modern farming techniques from agronomists.</li>
                            </ul>
                            <a href="/signUp" className={styles.ctaButton}>Join Now & Start Saving!</a>
                        </div>
                    </div>

                    {/* Suppliers' Benefits */}
                    <div className="col-md-6 px-0 order-md-1">
                        <img src={img3} alt="Suppliers benefiting" className={styles.img2} />
                    </div>
                    <div className="col-md-6 px-0 order-md-2">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Benefits for Suppliers</p>
                            <ul className={styles.featuresList}>
                                <li><span className={styles.featureIcon}>📦</span> <strong>Guaranteed Large Orders</strong> – Serve aggregated farmer demand.</li>
                                <li><span className={styles.featureIcon}>🚀</span> <strong>Market Expansion</strong> – Reach rural farmers directly.</li>
                                <li><span className={styles.featureIcon}>💰</span> <strong>Reduced Marketing Costs</strong> – The platform connects suppliers directly to buyers.</li>
                            </ul>
                            <a href="/signUp" className={styles.ctaButton}>Become a Supplier</a>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="row mt-5 mx-0 text-center">
                    <div className={styles.topContain}>
                        <p className={styles.headTop}>🔥 Ready to Transform Your Farming Business? 🔥</p>
                        <div className={styles.ctaButtons}>
                            <a href="/signUp" className={styles.ctaButtonGreen}>Join a Cooperative Now</a>
                            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonBlue}>Download KilimoHub App</a>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="row mt-5 mx-0">
                    <div className="col-12 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Frequently Asked Questions</p>
                            <div className={styles.faqContainer}>
                                {faqs.map((faq, index) => (
                                    <div className={styles.faqItem} key={index}>
                                        <div className={styles.faqHeader} onClick={() => toggleFAQ(index)}>
                                            <span className={styles.faqQuestion}>{faq.question}</span>
                                            <span className={styles.faqToggle}>{openIndex === index ? "−" : "+"}</span>
                                        </div>
                                        {openIndex === index && (
                                            <div className={styles.faqAnswer}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigitalCooperative;
