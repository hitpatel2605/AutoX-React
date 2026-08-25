import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Jaguar = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../jaguar/jg.webp',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../jaguar/jg2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../jaguar/jg3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../jaguar/jg4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../jaguar/jg5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'JAGUAR F-PACE SVR',
      imgUrl:'../jaguar/JAGUAR_F-PACE SVR.jpg',
      speed:"286 kmph",
      power:"543 bhp",
      price:"1.51 Cr*",
      
      specs:"JAGUAR F-PACE SVR has 5.0 V8 Supercharged P550 engine.The mileage of this car is 13KM/L.The fuel capacity & transmission of SVR is 82 litres & Automatic (Torque Converter) - 8 Gears, Paddle Shift, Sport Mode respectively. It offers many features like Cabin-Boot Access, Door Ajar Warning, Cruise Control, Heater, Keyless Start/ Button Start",
      company:"Jaguar"
    },
    {
      name:"JAGUAR F-PACE",
      imgUrl:'../jaguar/JAGUAR_F-PACE.jpg',
      speed:"286 kmph",
power:"201.15bhp",
price:"72.90 Lakh*",

specs:"The Jaguar F-Pace has 2.0L 4-cylinder. The Diesel engine is 1997 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the F-Pace has a mileage of 12.9 to 19.3 kmpl . The F-Pace is a 5 seater 4 cylinder car and has length of 4747 mm, width of 2175 mm and a wheelbase of 2445 mm.",
      company:"Jaguar"
    },
    {
      name: 'JAGUAR F-Type-Coupe',
      imgUrl:'../jaguar/JAGUAR_F-Type-Coupe.jpg',
      speed:"250kmph",
      power:"443.8bhp",
      price:"1 - 1.56 Cr*",
      
      specs:"The Jaguar F-TYPE has P450 Petrol Engine. The Petrol engine is 1997 cc and 5000 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the F-TYPE has a mileage of & Ground clearance of F-TYPE is 100 mm. The F-TYPE is a 2 seater 8 cylinder car and has length of 4470 mm, width of 2042 mm and a wheelbase of 2445 mm.",
      company:"Jaguar"
    },
    {
      name: 'JAGUAR I-PACE',
      imgUrl: '../jaguar/JAGUAR_I-PACE.jpg',
      speed:"200kmph",
power:"394.26bhp",
price:"1.26 Cr*",

specs:"The Jaguar I-Pace has  Electric Engine.It has 90kw kWH battery capacity. It is available with the Automatic transmission. The I-Pace is a 5 seater and has length of 4682 mm, width of 2139 mm and a wheelbase of 2990 mm.",

      company:"Jaguar"
    },
    {
      name: 'JAGUAR XE',
      imgUrl: '../jaguar/JAGUAR_XE.jpg',
      speed:"235kmph",
      power:"246.74bhp",
      price:"44.98 - 48.50 Lakh*",
      
      specs:"The Jaguar XE has 2.0l 4-cylinder Turbocharged Petrol engine. The Diesel engine is 1999 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the XE has a mileage of & Ground clearance of XE is 125 mm. The XE is a 5 seater 4 cylinder car and has length of 4691mm, width of 2075mm and a wheelbase of 2835mm.",
      company:"Jaguar"
    },
    {
      name: "JAGUAR XJR",
      imgUrl: '../jaguar/JAGUAR_XJR.jpg',
      speed:"265kmph",
power:"301bhp",
price:"99.01 Lakh - 1.11 Cr*",

specs:"The Jaguar XJ has 6-cylinder engine. The Diesel engine is 2993 cc while the Petrol engine is 1999 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the XJ has a mileage of 9.43 to 14.47 kmpl & Ground clearance of XJ is 104 mm. The XJ is a 5 seater 6 cylinder car and has length of 5255mm, width of 1899mm and a wheelbase of 3157mm.",
      company:"Jaguar"
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

export default Jaguar; 
