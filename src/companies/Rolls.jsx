import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Rolls = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../rolls/rol1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../rolls/rol3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../rolls/rol5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../rolls/rol7.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
  
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'Rollsroyce Arcadia Droptail',
      imgUrl:'../rolls/arcadia_droptail.jpg',
      speed:"250kmph",
power:"593bhp",
price:"209Cr*",
company:"Rolls Royce",
specs:"The La Rose Noire Droptail is powered by a 6.75-liter V12 engine that produces 563 horsepower and 625 lb-ft of torque. This allows the car to accelerate from 0 to 60 mph in just 4.8 seconds. Inspired by a fine piece of furniture in the client’s home, Santos Straight Grain — a high-density, delicate wood — was selected for the interior and exterior woodwork based on its visual intrigue and rich texture, derived from its interlocking grain pattern.",

    },
    {
      name: 'Rollsroyce Boat Tail',
      imgUrl:'../rolls/boat_tail.jpg',
      speed:"305kmph",
      power:"453.5 bhp",
      price:"233Cr*",
      company:"Rolls Royce",
      specs:"The Rolls-Royce Boat Tail is a convertible/cabriolet with 2 doors and a front mounted engine which supplies its power to the rear wheels. The 12 cylinder, double overhead camshaft naturally aspirated powerplant has 4 valves per cylinder and a displacement of 6.7 litres.",
      
    },
    {
      name: 'Rollsroyce Cullinan',
      imgUrl:'../rolls/cullinan.jpg',
      speed:"",
      power:"563 bhp",
      price:"6.95 Cr*",
      company:"Rolls Royce",
      specs:"The Rolls-Royce Cullinan has 6.75 V12 Petrol engine. The Petrol engine is 6750 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Cullinan has a mileage of 9.5 kmpl . The Cullinan is a 5 seater 12 cylinder car and has length of 5341 mm, width of 2000 mm and a wheelbase of 3295 mm.",
    },
    {
      name: 'Rollsroyce Phantom',
      imgUrl: '../rolls/phantom.jpg',
      speed:"",
      power:"563bhp",
      price:"8.99 - 10.48 Cr*",
      company:"Rolls Royce",
      specs:"The Rolls-Royce Phantom has V12 Petrol Engine. The Petrol engine is 6749 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Phantom has a mileage of 9.8 kmpl & Ground clearance of Phantom is 164 mm. The Phantom is a 5 seater 12 cylinder car and has length of 5982 mm, width of 2018 mm and a wheelbase of 3772 mm.",
    },
    {
      name: 'Rollsroyce Spectre',
      imgUrl: '../rolls/spectre.jpg',
      speed:"",
      power:"576.63bhp",
      price:"7.50 Cr*",
      company:"Rolls Royce",
      specs:"The Rolls-Royce Spectre has Electric Engine.It has 102 kWh battery capacity.It is available with the Automatic transmission. The Spectre is a 4 seater and has length of 5475 mm, width of 2144 mm and a wheelbase of 2636 mm.",
    },
    {
      name: 'Rollsroyce Ghost',
      imgUrl: '../rolls/ghost.jpg',
      speed:"",
      power:"563bhp",
      price:"6.95 - 7.95 Cr*",
      company:"Rolls Royce",
      specs:"The Rolls-Royce Ghost has V12 Petrol Engine. The Petrol engine is 6750 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Ghost has a mileage of 6.33 kmpl . The Ghost is a 5 seater 12 cylinder car and has length of 5627 mm, width of 1948 mm and a wheelbase of 3465 mm.",
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

export default Rolls
