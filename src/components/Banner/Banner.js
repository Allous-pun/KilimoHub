import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Banner.module.css'; // Import the CSS module for styling
import slides from './data'; // Import the slides data

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Next slide handler
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide handler
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.imgbox}>
      <div
        className={styles['slides-container']}
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`, // Move slides based on index
        }}
      >
        {slides.map((slide) => (
          <div
            className={styles.slide}
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }} // Set background image for each slide
          >
            <div className={styles.center}>
              <p data-aos="fade-down" className={styles.text}>{slide.text}</p>
              <p data-aos="fade-up" className={styles.description}>
                {slide.description}
              </p>
              <button
                data-aos="fade-up"
                className={`btn custom_btn ${styles.btn}`}
                onClick={() => window.location.href = slide.link} // Redirect to page on button click
              >
                {slide.buttonLabel}
              </button>
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
