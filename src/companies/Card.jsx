import React,{useState} from 'react'
import './card.css'
import {Link } from 'react-router-dom'
// import Form from './Form'
const Card = (props) => {

  return (
    <>
      <div className="card"  >
        <img src={props.imgUrl} class=" card_img card-img-top" alt="..." />
        {/* <hr className='hr' /> */}
        <div className="all">
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.specs}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item ">Top speed:<span className='spe text-danger'>{props.speed}</span></li>
            <li class="list-group-item ">Power:<span className='spe text-success'>{props.power}</span></li>
            <li class="list-group-item">Price:<span className='spe text-info'>{props.price}₹</span></li>
          </ul>
          <div class="card-body">
            {/* <button class="card-link" onClick={toggleForm}>Book Now</button> */}
            <Link to ={`/Form?car=${encodeURIComponent(props.name)}&company=${encodeURIComponent(props.company)}`} class="card-link"><button> Book Now</button></Link>
          </div>
        </div>
      </div>
      
  
    </>
  )
}

export default Card




// import React from 'react';

// const Card = ({ name, imgUrl, onClick }) => {
//     return (
//         <div className="card">
//             <img src={imgUrl} className="card_img card-img-top" alt="..." />
//             <div className="all">
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Top speed:</li>
//                     <li className="list-group-item">Power:</li>
//                     <li className="list-group-item">Price:</li>
//                 </ul>
//                 <div className="card-body">
//                     <button className="card-link"  onClick={onClick}>Buy Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;
