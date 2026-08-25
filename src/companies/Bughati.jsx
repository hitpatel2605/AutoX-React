import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';

const Bughati = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../bugatti/bu1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../bugatti/bu2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../bugatti/bu3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../bugatti/bu4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../bugatti/bu5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
   
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'Bugatti Centodieci',
      imgUrl:'../bugatti/Bugatti_Centodieci.jpg',
      speed:"380kmph",
      power:"1578 bhp",
      price:"61Cr*",
      company:"Bughati",
      specs:"This car has 8.0L quad-turbocharged W16 engine.It is 2 seater car.The transmission is a dual-clutch 7-speed gearbox, which sends the power to an all-wheel-drive system. The sprint from 0 to 100 kph (62 mph) is done in 2.4 seconds while the 0-300 kph (186.4 mph) acceleration takes just 13.1 seconds.",

    },
    {
      name:"Bugatti Chiron Sport",
      imgUrl:'../bugatti/buga.jpg',
      speed:"489 kmph" ,
      power:"1479.0 bhp",
      price:"21.22 Cr*",
      
      specs:"Bugatti Chiron Sport has W16 engine.It is 2 seater car. Bugatti Chiron Sport is available in transmission and offered in 3 colours : White, Blue and Red Metacllic.",
      company:"Bughati",
    },
    {
      name: 'Bugatti-Divo',
      imgUrl:'../bugatti/Bugatti-Divo.jpg',
      speed:"380 kmph",
      power:"1479bhp",
      price:"41 Cr*",
      
      specs:"The Bugatti Divo has BUGATTI 2-Stage Turbocharged W16 engine. The Petrol engine is 7993 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Divo has a mileage of . The Divo is a 2 seater 16 cylinder car and has length of 4641mm, width of 2018mm and a wheelbase of 2711mm.",
      
      company:"Bughati",
    },
    {
      name: 'Bugatti-La-Voiture-Noire',
      imgUrl: '../bugatti/Bugatti-La-Voiture-Noire.jpg',
      speed:"420 km/h",
      power:"1479bhp",
      price:"169.60 Cr*",
      
      specs:"The Bugatti La-Voitur-e-Noine has 8.0L Quad Turbocharged W16 engine.It is available with 7-speed automatic transmission.It goes 0-60 Under 3 seconds.Bugatti La Voiture Noire interior as the most comfortable car ever produced. It is a coupe that feels like a limousine.",
      company:"Bughati",
    },
    {
      name: 'Bugatti Mistral',
      imgUrl: '../bugatti/buga4.webp',
      speed:"420 kmph",
power:"1578 bhp",
price:"40Cr*",

specs:"It has Powerful Bugatti's W16 engine.it delivers blistering acceleration and impressive efficiency. Its interior is adorned with luxurious materials and cutting-edge technology, providing both comfort and an immersive driving experience.",
      company:"Bughati",
    },
    {
      name: "Bugatti Veyron",
      imgUrl: '../bugatti/vey2.jpg',
      speed:"431kmph",
      power:"1001bhp",
      price:"12 Cr*",

specs:"The Bugatti Veyron has W16 engine. The Petrol engine is 7993 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Veyron has a mileage of 6.8 kmpl & Ground clearance of Veyron is 90 mm. The Veyron is a 2 seater 16 cylinder car and has length of 4462mm, width of 1998mm and a wheelbase of 2710mm.",

      company:"Bughati",
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
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id}company={company} specs={specs}/>
        
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

export default Bughati
