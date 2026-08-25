import React,{useState} from 'react'
import Navbar from '../Navbar'
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import "./audi.css";
import Footer from '../Footer';
const BMW = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../bmw/bm1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../bmw/bm2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../bmw/bm3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../bmw/bm4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../bmw/bmw5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
   
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'BMW i7_M70',
      imgUrl:'../bmw/i7_M70.webp',
      speed:"250 kmph",
      power:"650.39 bhp",
      price:"2.50 Cr*",
      specs:"BMW i7 M70 xDrive is a 5 seater Electric(Battery) car.i7 M70 xDrive has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Power Windows Rear, Power Windows Front, Passenger Airbag.",
      company:"BMW"
    },
    // {
    //   name: ' BMW THE M3 COMPETITION',
    //   imgUrl:'../bmw/THE_M3_COMPETITION.webp',
    //   speed:"",
    //   power:"",
    //   price:""
    // },
    {
      name: 'BMW THE i4',
      imgUrl:'../bmw/THE_i4.webp',
      speed:"190 kmph",
      power:"335.25 bhp",
      price:"72.50 - 77.50 Lakh*",
      specs:"Its features list includes a curved 12.3-inch digital driver’s display, a 14.9-inch touchscreen infotainment system, powered tailgate and adjustable front seats, ambient lighting and a 17 speaker Harman Kardon sound system.",
      company:"BMW"
    },
    {
      name: 'BMW THE M5 COMPETITION',
      imgUrl: '../bmw/THE_M5_COMPETITION.webp',
      specs: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      speed:"250 Kmph",
      power:"617 bhp",
      price:"1.74 Cr*",
      specs:"This car has 4.4L twin-turbo V8 engine.It has 8-speed automatic transmission.It has All Wheel Drive System.Additional FeaturesHarman Kardon Surround Sound system (464 W) Parking Assistant with Reversing Assistant Wireless Smartphone Integration BMW Live Cockpit Professional M-specific Instrument Display.",
      company:"BMW"
      
    },
    {
      name: 'BMW THE M340i',
      imgUrl: '../bmw/THE_M340I.webp',
      speed:"250 kmph",
      power:"368.78bhp",
      price:"72.90 Lakh",
      specs:"BMW M340i is a 5 seater Petrol car.It has 3.0L 6-Cylinder engine. M340i has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Fog Lights - Front, Power Windows Rear, Power Windows Front.",
      company:"BMW"
    },
    // {
    //   name: 'BMW THE X5 M',
    //   imgUrl: '../bmw/THE_X5_M.webp',
    //   speed:"",
    //   power:"",
    //   price:""
    // },
    {
      name: 'BMW THE X6 M',
      imgUrl: '../bmw/THE_X6_M.webp',
      speed:"250 kmph",
      power:"1.82 Cr*",
      price:"573 bhp",
      specs:"BMW X6 M has 4.4L twin-turbo V8 engine.The BMW X6 M Competiton comes with 21-inch alloys, leather seats, wireless phone charging, smartphone integration, a harman/kardon stereo system and LED headlights as standard - as well as the powerful engine and suspension upgrades.",
      company:"BMW"
    },
    {
      name: 'BMW THE XM',
      imgUrl: '../bmw/THE_XM.webp',
      speed:"249 kmph",
      power:"643.69bhp",
      price:"2.60 Cr*",
      specs:"The BMW XM has 4.4 L V8 Electric Engine. The Petrol engine is 4395 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the XM has a mileage of 61.9 kmpl . The XM is a 7 seater 8 cylinder car and has length of 5155 mm, width of 2000 mm and a wheelbase of 2651 mm.",
      company:"BMW"
    }
    
]
const [car,setcar] = useState(cars)

const [selectedCar, setSelectedCar] = useState(null);
return (
  <div className='bg'>
    <Navbar/>
    <div className="app">
       <Carousel2  images={images} state={img} setImg={setImg}  />  
    </div>

    <div className="crd">
    {
      car.map((value)=>{
        const{id,name,imgUrl,speed,power,price,specs,company}= value
      return(
        <>
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id} specs={specs} company={company}/>
        
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
    <Footer/>
  </div>
);
}

export default BMW
