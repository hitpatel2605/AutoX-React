import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Ferr = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../ferrari/fer.webp',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../ferrari/fer2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../ferrari/fer3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../ferrari/fer4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../ferrari/fer5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
   
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'FERRARI 296-GTB',
      imgUrl:'../ferrari/FERRARI_296-GTS-2022_main.jpg',
      speed:"330 kmph",
      power:"831.43bhp",
      price:"5.40 Cr*",
      company:"Ferrari",
      specs:"The Ferrari 296 GTB has 3.0 L V6 Electric. The Petrol engine is 2992 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the 296 GTB has a mileage of . The 296 GTB is a 2 seater 6 cylinder car and has length of 4546 mm, width of 1958 mm and a wheelbase of 2450 mm."

    },
    {
      name:"FERRARI 812 GTS",
      imgUrl:'../ferrari/FERRARI_812-GTS.jpg',
      speed:"340kmph",
power:"788.52bhp",
price:"5.75 Cr*",
      company:"Ferrari",
      specs:"Ferrari 812 GTS is a 2 seater Petrol car.812 GTS has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels."
    },
    {
      name: 'FERRARI Daytona',
      imgUrl:'../ferrari/FERRARI_Daytona.jpg',
      speed:"340kmph",
power:"815bhp",
price:"16Cr*",
      company:"Ferrari",
      specs:"The Daytona SP3 is propelled by the most powerful combustion engine ever used in a Ferrari road car, a naturally aspirated 6.5-liter V-12 motor borrowed from the 812 Competizione.The engine's output is routed to the rear wheels through a seven-speed dual-clutch automatic gearbox."

    },
    {
      name: 'FERRARI F8-Spider',
      imgUrl: '../ferrari/FERRARI_F8-Spider.jpg',
      speed:"338kmph",
      power:"710.74 bhp",
      price:"4.02 Cr*",
      company:"Ferrari",
      specs:"The F8 Spider is powered by a twin-turbocharged 3.9-liter V-8 engine.All models are rear-wheel drive, and a seven-speed automatic transmission changes the gears. This Ferrari is quick enough to make an indelible impression.The list of standard tech features also includes a pair of LCD monitors and an integrated navigation system with a voice-activation feature."
    },
    {
      name: 'FERRARI Portofino',
      imgUrl: '../ferrari/FERRARI_Portofino.jpg',
      speed:"320 Kmph",
power:"591 bhp",
price:"3.50 Cr*",
      company:"Ferrari",
      specs:"The Ferrari Portofino is a grand touring sports car produced by the Italian automotive manufacturer Ferrari. It is a two-door 2+2 hard top convertible, with a 3.9 L twin-turbo V8 gasoline engine and a 0–60 mph (0–97 km/h) time of 3.5 seconds.Ferrari Portofino M is available in Automatic (DCT) transmission and offered in 14 colours."
    },

    {
      name: "FERRARI-SF90",
      imgUrl: '../ferrari/FERRARI-SF90.jpg',
     speed:"340kmph",
power:"769.31bhp",
price:"7.50 Cr*",
      company:"Ferrari",
      specs:"The Ferrari SF90 Stradale has V8-90°-turbo Engine. The Petrol engine is 3990 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the SF90 Stradale has a mileage of . The SF90 Stradale is a 2 seater 8 cylinder car and has length of 4710 mm, width of 1972 mm and a wheelbase of 2650 mm."
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
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id} company={company} specs={specs}/>
        
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

export default Ferr
