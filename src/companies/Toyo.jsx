import React,{useState} from 'react'
import "./audi.css";
import Navbar from '../Navbar'
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Toyo = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../toyota/ty1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../toyota/ty2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../toyota/ty3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../toyota/ty4.webp',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../toyota/ty5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'Toyota INNOVA HYCROSS',
      imgUrl:'../toyota/INNOVA_HYCROSS.webp',
      price:"Rs.19.77 - 30.98 Lakh*",
      power:"172.99 - 183.72 bhp",
      speed:"170 kmph",
      specs:" The Toyota Innova Hycross has 1 Petrol Engine on offer. The Petrol engine is 1987 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Innova Hycross has a mileage of 16.13 to 23.24 kmpl . The Innova Hycross is a 7 seater 4 cylinder car and has length of 4755 mm, width of 1845 mm and a wheelbase of 2850 mm.",
      company:"Toyota"
    },
    {
      name: 'Toyota Legender',
      imgUrl:'../toyota/legender.jpg',
      price:"Rs.43.66 - 47.64 Lakh*",
power:"201.15 bhp",
speed:"190+ kmph",
specs:"The Toyota Fortuner Legender has 1 Diesel Engine on offer. The Diesel engine is 2755 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Fortuner Legender has a mileage of . The Fortuner Legender is a 7 seater 4 cylinder car and has length of 4795 mm, width of 1855 mm and a wheelbase of 2745 mm.",
company:"Toyota"
    },
    {
      name: 'Toyota Hilux',
      imgUrl:'../toyota/HILUX.webp',
      price:"Rs.30.40 - 37.90 Lakh*",
power:"201.15 bhp",
speed:" 185 kmph.",
specs:"The Toyota Hilux has 1 Diesel Engine on offer. The Diesel engine is 2755 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Hilux has a mileage of . The Hilux is a 5 seater 4 cylinder car and has length of 5325 mm, width of 1855 mm and a wheelbase of 2807 mm.",
company:"Toyota"
      
    },
    {
      name: 'Toyota INNOVA CRYSTA',
      imgUrl: '../toyota/INNOVA_CRYSTA.webp',
      price:"Rs.19.99 - 26.30 Lakh*",
power:"147.51 bhp",
speed:"175 km/h.",
specs:"The Toyota Innova Crysta has 1 Diesel Engine on offer. The Diesel engine is 2393 cc . It is available with Manual transmission.Depending upon the variant and fuel type the Innova Crysta has a mileage of . The Innova Crysta is a 7 seater 4 cylinder car and has length of 4735 mm, width of 1830 mm and a wheelbase of 2750 mm.",
company:"Toyota"
    },
    {
      name: 'Toyota LAND CRUISER LC300',
      imgUrl: '../toyota/LAND_CRUISER_LC300.webp',
      price:"Rs.2.10 Cr*",
      power:"304.41 bhp",
      speed:"209 kmph",
      specs:"The Toyota Land Cruiser 300 has 1 Diesel Engine on offer. The Diesel engine is 3346 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Land Cruiser 300 has a mileage of 11 kmpl . The Land Cruiser 300 is a 5 seater 6 cylinder car and has length of 4685 mm, width of 1980 mm and a wheelbase of 2740 mm.",
      company:"Toyota"
    },
    {
      name: 'Toyota Supra',
      imgUrl: '../toyota/SUPRA.jpg',
price:"85 lakh*",
power:"382 bhp",
speed:"250 km/h",
specs:"The Toyota Supra has 1 Petrol Engine on offer. The Petrol engine is 1998 cc . It is available with the Automatic transmission.",
company:"Toyota"
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

export default Toyo
