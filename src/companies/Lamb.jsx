import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Footer from '../Footer';
import Form from './Form';
const Lamb = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../lemborghinni/lg1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../lemborghinni/lg2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../lemborghinni/lg3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../lemborghinni/lg4.webp',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../lemborghinni/lg5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'AVENTADOR SVJ',
      imgUrl:'../lemborghinni/AVENTADOR_SVJ.webp',
      speed:"350kmph",
power:"759 bhp",
price:"6.25 Cr*",
specs:"This car has 6.5L V12 Engine.All Wheel Drive and the creature comforts found within. The final measure of grip comes from Pirelli P Zero Corsa tires. They measure 255/30/20 front and 355/25/21 rear. To fit such massive rubber, the wheels are 20’x9″ front and 21″x13″ rear.",
company:"jaguar"
    },
    {
      name: 'HURACAN',
      imgUrl:'../lemborghinni/HURACAN.webp',
      speed:"325kmph",
      power:"640bhp",
      price:"2.99 - 3.97 Cr*",
      
      specs:"The Lamborghini Huracan has V10 pertol engine. The Petrol engine is 5204 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Huracan has a mileage of 10.6 to 11.24 kmpl & Ground clearance of Huracan is 125 mm. The Huracan is a 2 seater 10 cylinder car and has length of 4459mm, width of 1924mm and a wheelbase of 2620mm.",
      company:"jaguar"
    },
    {
      name: 'LP-780_ULTIMATE_ROADSTER',
      imgUrl:'../lemborghinni/LP-780_ULTIMATE_ROADSTER.webp',
      speed:"355kmph",
      power:"759.01bhp",
      price:"9 Cr*",
      
      specs:" Aventador 780-4 Ultimae Roadster is the newest-and final-open-top version of a legendary family. Its 780 CV V12, the latest and most powerful standard-production, naturally aspirated engine in Lamborghini history, makes this model the most iconic of the Aventador range.",
      company:"jaguar"
      
    },
    {
      name: 'REVUELTO',
      imgUrl: '../lemborghinni/REVUELTO.jpg',
      speed:"350kmph",
power:"1001.11bhp",
price:"8.89 Cr*",

specs:"The Lamborghini Revuelto has 6.5L V12 engine. The Petrol engine is 6498 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Revuelto has a mileage of . The Revuelto is a 2 seater 12 cylinder car and has length of 4947 mm, width of 2266 mm and a wheelbase of 2651 mm.",
company:"jaguar"
    },
    {
      name: 'SIAN',
      imgUrl: '../lemborghinni/SIAN.jpg',
      speed:"350kmph",
      power:"808bhp",
      price:"25Cr*",
      
      specs:"Sian nevertheless has one familiar ingredient - a V12 engine. Together with a 48-volt e-motor, the Lamborghini Sian's 808 horsepower output is realized. It can reach 62 mph in under 2.8 seconds.",
      company:"jaguar"
    },
    {
      name: 'URUS',
      imgUrl: '../lemborghinni/URUS.webp',
    
speed:"305kmph",
power:"657.10bhp",
price:"4.18 - 4.22 Cr*",

specs:"The Lamborghini Urus has V8 bi-turbo Engine. The Petrol engine is 3996 cc and 3999 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Urus has a mileage of . The Urus is a 5 seater 8 cylinder car and has length of 5137 mm, width of 2181 mm and a wheelbase of 2445 mm.",
company:"jaguar"

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
        const{id,name,imgUrl,speed,power,price,company,specs}= value
      return(
        <>
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id} company={company} specs = {specs}/>
        
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

export default Lamb
