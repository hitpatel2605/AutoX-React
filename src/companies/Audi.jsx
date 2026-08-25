
import React, { useState } from 'react';
import Carousel2 from '../Carousel2';
import Navbar from '../Navbar';
import "./audi.css";
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';

const Audi = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../audi/a1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'

    },
    {
      name: 'audi R8',
      imageUrl: '../audi/a2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl: '../audi/a3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../audi/a4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../cars/car5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },

  ];
  const [img, setImg] = useState(images);


  const cars = [
    {
      name: 'A4 Sedan',
      imgUrl: '../audi/A4_Sedan.png',
      specs: "The Audi A4 has 2.0 L TFSI petrol engine. The Petrol engine is 1984 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the A4 has a mileage of . The A4 is a 5 seater 4 cylinder car and has length of 4762 mm, width of 1847 mm and a wheelbase of 2500 mm.",
      speed: "241 kmph",
      power: "188bhp",
      price: "45.34 - 53.50 Lakh",
      company: "Audi"


    },
    {
      name: 'audi A8L',
      imgUrl: '../audi/A8L.png',
      speed: " 250kmph",
      power: "335.25 bhp",
      price: "1.34 - 1.63 Cr",
      specs: "The Audi A8 L has 55 TFSI quattro tiptronic engine. The Petrol engine is 2995 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the A8 L has a mileage of . The A8 L is a 5 seater 6 cylinder car and has length of 5320 mm, width of 2130 mm",
      company: "Audi"

    },
    {
      name: 'Audi RS e-tron GT',
      imgUrl: '../audi/Audi_RS_e-tron_GT.png',
      speed: "245kmph",
      power: "636.98 bhp",
      price: "1.95 Cr",
      specs: "The Audi RS e-tron GT has 1 Electric Engine on offer. It is available with the Automatic transmission. The RS e-tron GT is a 5 seater and has length of 4989 mm, width of 1964 mm and a wheelbase of 2900 mm.",
      company: "Audi"

    },
    {
      name: 'Audi Q7',
      imgUrl: '../audi/Q7.png',
      speed: "250 kmph",
      power: "335.25 bhp",
      price: "86.92 - 94.45 Lakh",
      specs: "The Audi Q7 has 3.0L V6 TFSI engine. The Petrol engine is 2995 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Q7 has a mileage of 11.21 kmpl . The Q7 is a 7 seater 6 cylinder car and has length of 5064 mm, width of 2212 mm and a wheelbase of 2500 mm.",
      company: "Audi"

    },
    {
      name: 'Audi Q8',
      imgUrl: '../audi/Q8.png',
      speed: "250 kmph",
      power: "340bhp",
      price: "1.07 - 1.43 Cr",
      specs: "The Audi Q8 has TFSI Petrol Engine. The Petrol engine is 2995 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Q8 has a mileage of 9.8 kmpl . The Q8 is a 5 seater 4 cylinder car and has length of 4986 mm, width of 2190 mm and a wheelbase of 2500 mm.",
      company: "Audi"

    },
    {
      name: 'RS 5 Sportsback',
      imgUrl: '../audi/RS_5_Sportback.png',
      speed: " 250kmph",
      power: "443.87 bhp",
      price: "1.13 Cr",
      specs: " The Audi RS 5 Sportsback has V6 Engine. The Engine is 2894cc.It is avilable with All Wheel Drive System. It has 8-Speed Automatic transmission.",
      company: "Audi"



    }
    // {
    //   name: 'mustang shelby gt500',
    //   imgUrl: './cars/car7.jpg',

    // },
    // {
    //   name: 'mustang shelby gt500',
    //   imgUrl: './cars/car9.jpg',

    // }
  ]
  const [car, setcar] = useState(cars)
  const [selectedCar, setSelectedCar] = useState(null);
  return (
    <div className='bg'>
      <Navbar />
      <div className="app">
        <Carousel2 images={images} state={img} setImg={setImg} />
      </div>

      <div className="crd">
        {
          car.map((value) => {
            const { id, name, imgUrl, speed, power, price, specs, qty, company } = value
            return (
              <>

                <Card name={name} imgUrl={imgUrl} speed={speed} power={power} price={price} specs={specs} key={id} qty={qty} company={company} />

              </>
            )
          }

          )}
        {/* <div className="frm">
                    {car.map((value, index) => (
                        <Form  imgUrl={value.imgUrl[index]} name ={value.name[index]}  />
                    ))}
                </div> */}
      </div>
      {selectedCar && (
        <div className="frm">
          <Form carName={selectedCar} />
        </div>
      )}

      <Footer className='foot' />
    </div>
  );
};

export default Audi;







