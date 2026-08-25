import React, { useState, useEffect } from 'react';
import Carousel from './Carousel'
import Navbar from './Navbar'
import Map from './Map'
import './home.css'
import Footer from './Footer';
import Logo from "./Logo"



const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedHome');
    if (hasVisitedBefore) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisitedHome', 'true'); 
      }, 4000); 

      return () => clearTimeout(timer); 
    }
  },[]);
    
  
  return (
    <>
      {loading ? (
        <div className="loading-screen">
           <h2>Car Dekho</h2>
          <div className="lds-ellipsis">
         
            <div></div><div></div><div></div><div></div></div>
        </div>
      ) : (
        <div className="back">
          <Navbar />
          <Carousel />
          <div className="cl">
            <Logo/>
          </div>

          <Footer/>
        </div>
      )}
    </>
  )
}

export default Home
