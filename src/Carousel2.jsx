
// import React, { useState } from 'react';
// import './carousel2.css';

// const Carousel2 = (props) => {

//   return (
//    <>
//    <div id="carouselExampleCaptions" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={props.state[0].imageUrl} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={props.state[1].imageUrl} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={props.state[2].imageUrl} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={props.state[3].imageUrl} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={props.state[4].imageUrl} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <div className="bns">
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
//   </div>
// </div>
//    </>
//   );
// };

import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel2 = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.state.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.state.length) % props.state.length);
  };

  
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);  

    return () => clearInterval(intervalId); 
  }, []); 


  const currentSlide = props.state[currentIndex];

  
  const nextIndexes = [(currentIndex + 1) % props.state.length, (currentIndex + 2) % props.state.length, (currentIndex + 3) % props.state.length, (currentIndex + 4) % props.state.length];

  return (
    
    <div className="container">
      <div className="slide">
        {[currentIndex, ...nextIndexes].map((ind) => (
          <div
            key={ind}
            className={`item ${ind === currentIndex ? 'current' : ''}`}
            style={{ backgroundImage: `url(${props.state[ind].imageUrl})` }}
          >
            {ind !== currentIndex && (
              <div className="content">
                <div className="name">{props.state[ind].name}</div>
                <div className="des">{props.state[ind].description}</div>
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

export default Carousel2;


// export default Carousel2;


// import React, { useState } from 'react';
// import './carousel2.css';

// const Carousel2 = (props) => {
//   const images = props.state;

//   return (
//     <>
//       <div id="carouselExampleCaptions" className="carousel slide">
//         <div className="carousel-indicators">
//           {images.map((item, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to={index}
//               className={index === 0 ? 'active' : ''}
//               aria-current={index === 0 ? 'true' : ''}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//         <div className="carousel-inner">
//           {images.map((item, index) => (
//             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//               <img src={item.imageUrl} className="d-block w-100" alt={item.name} />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>{item.name}</h5>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };


