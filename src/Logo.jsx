

import React from 'react';
import { Link } from 'react-router-dom';
import "./logo.css";

const Logo = () => {
  return (
    <>
    <div className="logo-container">
      <h2 className='h2'>Explore Our Premium Brands</h2>
        <div className="logo-list">
          {/* <div className="log"><Link to="/"><img src="./logos/ASTON MARTIN.png" alt="Aston Martin"/><h2>Aston Martin</h2></Link>
          </div> */}
          <div className="log"><Link to="/Audi"><img src="./logo/b1.jpg" alt="Audi"/><h2>Audi</h2></Link></div>
          {/* <div className="log"><Link to="/Bently"><img src="./logos/BENTLY.png" alt="Bently"/><h2>Bently</h2></Link></div> */}
          <div className="log"><Link to="/BMW"><img src="./logo/Bmw.jpg" alt="BMW"/><h2>BMW</h2></Link></div>
          <div className="log"><Link to="/Bughati"><img src="./logos/BUGATTI.png" alt="Bugatti"/><h2>Bughati</h2></Link></div>
          {/* <div className="log"><Link to="/Dodje"><img src="./logos/DODGE.jpg" alt="Dodge"/><h2>Dodje</h2></Link></div> */}
          <div className="log"><Link to="/Ferr"><img src="./logos/FERRARI.png" alt="Ferrari"/><h2>Ferrari</h2></Link></div>
          <div className="log"><Link to="/Ford"><img src="./logo/Ford.jpg" alt="Ford"/><h2>Ford</h2></Link></div>
          {/* <div className="log"><Link to="/Honda"><img src="./logos/HONDA.png" alt="Honda"/><h2>Honda</h2></Link></div> */}
          {/* <div className="log"><Link to="/Hund"><img src="./logos/HYUNDAI.png" alt="Hyundai"/><h2>Hyundai</h2></Link></div> */}
          <div className="log"><Link to="/Jaguar"><img src="./logo/JAG.jpeg.jpg" alt="Jag"/><h2>Jaguar</h2></Link></div>
          <div className="log"><Link to="/Lamb"><img src="./logos/LAMBORGHINI.png" alt="Lamborghini"/><h2>Lamborgini</h2></Link></div>
          {/* <div className="log"><Link to="/Mahindra"><img src="./logos/MAHINDRA.png" alt="Mahindra"/><h2>Mahindra</h2></Link></div> */}
          <div className="log"><Link to="/Land"><img src="./logos/LAND ROVER.png" alt="Land Rover"/><h2>Land Rover</h2></Link></div>
          <div className="log"><Link to="/Merc"><img src="./logo/MERC.jpg" alt="Mercedes"/><h2>Mercedes</h2></Link></div>
          <div className="log"><Link to="/Porse"><img src="./logo/PORS01.jpg" alt="Porsche"/><h2>Porsche</h2></Link></div>
          <div className="log"><Link to="/Rolls"><img src="./logos/ROLLS ROYCE.png" alt="Rolls Royce"/><h2>Rolls Royce</h2></Link></div>
          {/* <div className="log"><Link to="/Suzuki"><img src="./logos/SUZUKI.png" alt="Suzuki"/><h2>Maruti Suzuki</h2></Link></div> */}
          {/* <div className="log"><Link to="/Tata"><img src="./logos/TATA.png" alt="Tata"/><h2>TATA</h2></Link></div> */}
          <div className="log"><Link to="/Toyo"><img src="./logos/TOYOTA.png" alt="Toyota"/><h2>Toyota</h2></Link></div>
          {/* <div className="log"><Link to="/Walks"><img src="./logo/volkswagen.jpg" alt="Volkswagen"/><h2>Volkswagen</h2></Link></div> */}
        </div>
     </div>
    </>
  );
};

export default Logo;





