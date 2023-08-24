'use client';
import styles from './image-slide.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

function ImageSlide() {

  const [ currentImage, setCurrentImage ] = useState(0);
  const [autoCycling, setAutoCycling] = useState(true);

  const delay = 4000;

  const images = [
    '/sc-1.webp',
    '/sc-2.webp',
    '/sc-3.webp',
    '/sc-4.webp'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoCycling) {
        
        setCurrentImage((prevImage) =>
        (prevImage + 1) % images.length
        );
      }
    }, delay);
    
    return () => {
      clearInterval(interval)
    }
  }, [autoCycling]);

  return (
    <div className={`${styles.slideContainer}`}>
      <div className={`${styles.imageSlider}`}>
        <div>
          {images.map((image, i) => (
            <Image
              key={image}
              className='rounded-3xl' 
              src={image}
              alt="Rezarus game image"
              fill={true}
              quality={90}
              style={{
                opacity: i === currentImage ? 1 : 0,
                transition: 'opacity 0.75s ease-in-out'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 shadow-cardshadow rounded-3xl"></div>
      </div>
      <div className={`${styles.slideDots}`}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.slideDot} ${currentImage === index ? "bg-white" : "bg-black"} opacity-100`}
            onClick={() => {
              setCurrentImage(index);
              setAutoCycling(false);
            }}
            >
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlide