import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Merc = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../mercedes/mer1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../mercedes/mer2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../mercedes/mer3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../mercedes/mer4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../mercedes/mer5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: '2022-lamborghini-aventador-109-1625607587',
      imageUrl: '../cars/car1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'mustang shelby gt500',
      imageUrl: '../cars/car7.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'mustang shelby gt500',
      imageUrl: '../cars/car9.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    }
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'Mercedes amg g63 ',
      imgUrl:'../mercedes/amg_g63.jpg',
      speed:"220 kmph",
price:"2.45 - 3.30 Cr*",
power:"577 bhp",
specs:"The Mercedes-Benz AMG G 63 has V8 engine. The Petrol engine is 3982 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the AMG G 63 has a mileage of & Ground clearance of AMG G 63 is 238 mm. The AMG G 63 is a 5 seater 8 cylinder car and has length of 4923 and width of 1938.",
company:"Mercedes"
    },
    {
      name:"Mercedes  e 350d",
      imgUrl:'../mercedes/mercedes_e_350d.jpg',
      speed:"250 kmph",
price:"72.80 - 84.90 Lakh*",
power:"281.61bhp",
specs:"The Mercedes-Benz E-Class has  3.0 L in-line 6 cylinder engine. The Diesel engine is 1950 cc and 2925 cc while the Petrol engine is 1991 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the E-Class has a mileage of 16.1 kmpl . The E-Class is a 5 seater 6 cylinder car and has length of 5075 mm, width of 1860 mm and a wheelbase of 2636 mm.",
company:"Mercedes"
    },
    {
      name: 'Mercedes s class maybach',
      imgUrl:'../mercedes/mercedes_s_class_maybach.jpg',
      speed:"250 kmph",
      price: "2.72-3.43 Cr*",
      power:"496.17 - 603.46 bhp",
      specs:"The Mercedes-Benz Maybach S-Class has V12 Engine . The Petrol engine is 3982 cc and 5980 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Maybach S-Class has a mileage of . The Maybach S-Class is a 5 seater 12 cylinder car and has length of 5469 mm, width of 2109 mm and a wheelbase of 3008 mm.",
      company:"Mercedes"
    },
    {
      name: 'Mercedes amg-gle-coupe',
      imgUrl: '../mercedes/mercedes-amg-gle-coupe.jpg',
      speed:"250 kmph",
      price:"1.85 Cr*",
      power:"429 bhp",
      specs:"The Mercedes-Benz AMG GLE 53 has 3.0-litre 6-cylinder In-lineTurbo Engine  . The Petrol engine is 2999 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the AMG GLE 53 has a mileage of 8.9 kmpl . The AMG GLE 53 is a 5 seater 6 cylinder car and has length of 4961 mm, width of 2157 mm and a wheelbase of 2750 mm.",
      company:"Mercedes"
    },
    {
      name: 'Mercedes-amg-gt-63-s-4-door-coupe-29',
      imgUrl: '../mercedes/mercedes-amg-gt-63-s-4-door-coupe-29.webp',
      speed:"316 kmph",
      price: "3.21 Cr*",
      power:"630 bhp",
      specs:"Mercedes-Benz AMG GT 4 Door Coupe 63 S E Performance is a 5 seater Petrol car.AMG GT 4 Door Coupe 63 S E Performance has Anti Lock Braking System, Alloy Wheels, Passenger Airbag, Driver Airbag.",
      company:"Mercedes"
    },
    {
      name: "Mercedes gls 600",
      imgUrl: '../mercedes/mercesdes_gls_600.jpg',
      speed:"300 kmph",
      price:" 3.52 Crore",
      power:"550 bhp",
      specs:"It is powered by a 3982 cc engine which is available with a Automatic transmission. Maybach 600 4MATIC Plus has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Power Windows Rear, Power Windows Front, Passenger Airbag.",
      company:"Mercedes"
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

export default Merc
