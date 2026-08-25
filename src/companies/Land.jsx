import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Land = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../land_rover/lr1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../land_rover/lr2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../land_rover/lr3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../land_rover/lr4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../land_rover/lr5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'DEFENDER',
      imgUrl:'../land_rover/DEFENDER.webp',
      speed:"191kmph",
      power:"517.63bhp",
      price:"97 Lakh - 2.35 Cr*",
      
      specs:"The Land Rover Defender has 3.0L V8 engine. The Diesel engine is 2998 cc and 2997 cc while the Petrol engine is 1997 cc and 2998 cc and 1998 cc and 2997 cc and 4997 cc and 5000 cc and 4998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Defender has a mileage of 14.01 kmpl . The Defender is a 6 seater 8 cylinder car and has length of 4583 mm and width of 2105 mm.",
      company:"Land Rover"
    },
    {
      name: 'DISCOVERY SPORT',
      imgUrl:'../land_rover/DISCOVERY_SPORT.webp',
      speed:"225kmph",
      power:"245.40bhp",
      price:"67.90 Lakh*",
      
      specs:"The Land Rover Discovery Sport has 4-cylinder engine. The Diesel engine is 1999 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Discovery Sport has a mileage of 19.4 kmpl & Ground clearance of Discovery Sport is 212 mm. The Discovery Sport is a 7 seater 4 cylinder car and has length of 4600 mm, width of 2173 mm and a wheelbase of 2741 mm.",
      company:"Land Rover"
    },
    {
      name: 'RANGE ROVER EVOQUE',
      imgUrl:'../land_rover/RANGE_ROVER_EVOQUE.webp',
      speed:"213kmph",
power:"201bhp",
price:"67.90 Lakh*",

specs:"The Land Rover Range Rover Evoque has BS VI 2.0 engine. The Diesel engine is 1997 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Range Rover Evoque has a mileage of . The Range Rover Evoque is a 5 seater 4 cylinder car and has length of 4371 mm and width of 1996 mm.",
company:"Land Rover"
    },
    {
      name: 'RANGE ROVER LEB SV AUTOBIOGRAPHY',
      imgUrl: '../land_rover/RANGE_ROVER_LEB_SV_AUTOBIOGRAPHY.jpg',
      speed:"235kmph",
power:"523bhp",
price:"2.39 - 4.47 Cr*",

specs:"The Land Rover Range Rover has turbocharged V8 engine. The Diesel engine is 2997 cc while the Petrol engine is 2998 cc and 2996 cc and 4367 cc and 4395 cc and 2997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Range Rover has a mileage of 13.16 kmpl . The Range Rover is a 7 seater 8 cylinder car and has length of 5052 mm, width of 2209 mm and a wheelbase of 2400 mm.",
company:"Land Rover"
    },
    {
      name: 'RANGE ROVER SPORT',
      imgUrl: '../land_rover/RANGE_ROVER_SPORT.jpg',
      speed:"290kmph",
power:"626.25bhp",
price:"1.69 - 2.80 Cr*",

specs:"The Land Rover Range Rover Sport has 6-cylinder engine. The Diesel engine is 2998 cc and 2997 cc while the Petrol engine is 2997 cc and 4395 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Range Rover Sport has a mileage of . The Range Rover Sport is a 5 seater 6 cylinder car and has length of 4946 mm, width of 2209 mm and a wheelbase of 2610 mm.",
company:"Land Rover"
    },
    {
      name: 'RANGE ROVER VELAR',
      imgUrl: '../land_rover/RANGE_ROVER_VELAR.webp',
      speed:"210kmph",
      power:"246.74bhp",
      price:"87.90 Lakh*",
      
      specs:"The Land Rover Range Rover Velar has TD4 Engine. The Diesel engine is 1997 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Range Rover Velar has a mileage of 15.8 kmpl . The Range Rover Velar is a 5 seater 4 cylinder car and has length of 4797 mm, width of 2147 mm and a wheelbase of 3006 mm.",
      company:"Land Rover"  
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
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id} specs={specs} company = {company}/>
        
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

export default Land
