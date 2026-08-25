
import React, { useState ,useEffect} from 'react';
import './carousel.css'; 

const SlideShow = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      name: 'Mustang Shelby GT500',
      imageUrl: './cars/car6.jpg',
     
    },
    {
      name: 'Lamborghini Huracan',
      imageUrl: './cars/car8.jpg',
     
    },
    {
      name: 'Audi R8',
      imageUrl:'./cars/car3.jpg',
     
    },
    {
      name: 'Bugatti Chiron Sport',
      imageUrl: './cars/car4.jpg',
     
    },
    {
      name: 'Mercedes AMG GT3',
      imageUrl: './cars/car5.jpg',
     
    },
    {
      name: 'Lamborghini Aventador',
      imageUrl: './cars/car1.jpg',
     
    },
    {
      name: 'Porsche 911 GT3 RS',
      imageUrl: './cars/car7.jpg',
     
    },
    {
      name: 'BMW M5 CS',
      imageUrl: './cars/car9.jpg',
     
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);  

    return () => clearInterval(intervalId); 
  }, []); 


  const currentSlide = slides[currentIndex];

  
  const nextIndexes = [(currentIndex + 1) % slides.length, (currentIndex + 2) % slides.length, (currentIndex + 3) % slides.length, (currentIndex + 4) % slides.length, (currentIndex + 5) % slides.length];

  return (
    
    <div className="container">
      <div className="slide">
        {[currentIndex, ...nextIndexes].map((index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'current' : ''}`}
            style={{ backgroundImage: `url(${slides[index].imageUrl})` }}
          >
            {index !== currentIndex && (
              <div className="content">
                <div className="name">{slides[index].name}</div>
                <div className="des">{slides[index].description}</div>
                <button>See More</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default SlideShow;
