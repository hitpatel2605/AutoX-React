import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Porse = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../porsche/pr1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../porsche/pr2.webp',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../porsche/pr3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../porsche/pr4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../porsche/pr5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'Porsche 911 gt3RS',
      imgUrl:'../porsche/911_gt3RS.webp',
      price:"3.51 Cr*",
power:"379.50bhp",
speed:"293 kmph",
specs:"Porsche 911 GT3 RS is a 4 seater Petrol car.911 GT3 RS has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Power Windows Rear.",
  company:"Porsche"
    },
    {
      name: 'Porsche 911 turbo S ',
      imgUrl:'../porsche/911_turbo_S.webp',
      price:"3.35 Cr*",
power:"641.00bhp",
speed:"330 Kmph",
specs:"Porsche 911 Turbo S is a 4 seater Petrol car.911 Turbo S has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Power Windows Rear.",
  company:"Porsche"
    },
    {
      name: 'Porsche Cayenne',
      imgUrl:'../porsche/Cayenne.jpg',
      price:" 1.62 Crore",
      power:"348 bhp",
      speed:"248 kmph",
      specs:"The Porsche Cayenne Coupe has 1 Petrol Engine on offer. The Petrol engine is 2894 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Cayenne Coupe has a mileage of . The Cayenne Coupe is a 4 seater 6 cylinder car and has length of 4931 mm and width of 1983 mm.",
        company:"Porsche"
    },
    {
      name: 'Porsche Macan GTS ',
      imgUrl: '../porsche/Macan_GTS.jpg',
      price:"88.06 Lakh - 1.53 Cr*",
      power:"261.49 - 434.49 bhp",
      speed:"232 kmph",
      specs:"The Porsche Macan has Twin-Turbocharged Engine. The Petrol engine is 1984 cc and 2894 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Macan has a mileage of 11.24 kmpl & Ground clearance of Macan is 285 mm. The Macan is a 5 seater 6 cylinder car and has length of 4726 mm, width of 2097 mm and a wheelbase of 2600 mm.",
        company:"Porsche"
    },
    {
      name: 'Porsche Panamera ',
      imgUrl: '../porsche/Panamera.jpg',
      price:"1.68 Cr*",
      power:"670.51 bhp",
      speed:"310 kmph",
      specs:"The Porsche Panamera has 4.0-litre V8 bi-turbo engine . The Petrol engine is 3998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Panamera has a mileage of . The Panamera is a 4 seater 8 cylinder car and has length of 5049 mm and width of 1937 mm.",
        company:"Porsche"
    },
    {
      name: 'Porsche Taycan Turbo GT ',
      imgUrl: '../porsche/Taycan_Turbo_GT.jpg',
      price:"2.04 cr*",
      power:"482.76bhp",
      speed:"240 kmph",
      specs:"Porsche Taycan GTS is a 5 seater Electric(Battery) car.Taycan GTS has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Anti Lock Braking System, Alloy Wheels, Fog Lights - Front, Power Windows Rear, Power Windows Front, Passenger Airbag.",
      company:"Porsche"
    },

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

export default Porse
