import React from 'react'
import './map.css'

const Map = () => {
  return (
    <>
      <div className="cont">
      <h2 className='loc'>My Location</h2>
      <div className="map">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7336.744075013158!2d72.66258087612252!3d23.156617850777426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e802cfe647e33%3A0x983a11b5cb484f15!2sPandit%20Deendayal%20Energy%20University-%20PDEU%20(Formerly%20PDPU)!5e0!3m2!1sen!2sin!4v1711787716590!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3735802991005!2d72.66283291091418!3d23.156561511227412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e802cfe647e33%3A0x983a11b5cb484f15!2sPandit%20Deendayal%20Energy%20University-%20PDEU%20(Formerly%20PDPU)!5e0!3m2!1sen!2sin!4v1712138565468!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </>
  )
}

export default Map
