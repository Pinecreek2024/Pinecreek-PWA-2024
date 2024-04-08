import React, { useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <span className={styles.leftArrow} onClick={prevSlide}>&#10094;</span>
      <span className={styles.rightArrow} onClick={nextSlide}>&#10095;</span>
      {images.map((image, index) => (
        <div className={index === current ? `${styles.slide} ${styles.active}` : styles.slide} key={index}>
          {index === current && (<img src={image} alt={`Slide ${index}`} className={styles.image} />)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
