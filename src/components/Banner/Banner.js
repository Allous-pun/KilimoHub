import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Banner.module.css'; // Import the CSS module for styling

// Slide data directly in the component
import banner1 from '../../assets/home/banner1.png';
import banner2 from '../../assets/home/banner2.png';
import banner3 from '../../assets/home/banner3.png';

const slides = [
  {
    id: 1,
    image: banner1,
    text: 'Digital Cooperative Platform',
    description: 'Empowering farmers to collaborate and share resources, enhancing community and growth. Access tools for resource sharing, market access, and collective success. Optimize operations, reduce costs, and foster sustainable farming communities.',
  },
  {
    id: 2,
    image: banner2,
    text: 'Farm Supplies',
    description: 'Access quality farm inputs through bulk purchasing and collective bargaining, reducing costs for farmers. Pool resources to buy seeds, fertilizers, and tools at discounted rates for improved productivity. Pool resources to buy seeds, fertilizers, and tools at discounted rates for improved productivity.',
  },
  {
    id: 3,
    image: banner3,
    text: 'Crop Health Diagonosis Tool',
    description: 'Diagnose crop health issues early with AI-powered tools for timely solutions and improved yields. Identify pests, diseases, and nutrient deficiencies with actionable recommendations to prevent losses. Monitor crop health proactively to optimize resources and ensure sustainable farming practices.',
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, []);

  // Handlers for manual navigation
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.imgbox}>
      {/* Slides container */}
      <div
        className={styles['slides-container']}
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`, // Slide transition
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={styles.slide}
            style={{ backgroundImage: `url(${slide.image})` }} // Slide background image
          >
            <div className={styles.content}>
              <h1 className={styles.text}>{slide.text}</h1>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation icons */}
      <FaArrowAltCircleLeft
        className={styles.navIcon}
        onClick={handlePrevSlide}
        style={{ left: '10px' }} // Left position
      />
      <FaArrowAltCircleRight
        className={styles.navIcon}
        onClick={handleNextSlide}
        style={{ right: '10px' }} // Right position
      />
    </div>
  );
};

export default Banner;
