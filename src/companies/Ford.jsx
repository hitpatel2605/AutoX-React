import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Ford = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../ford/frd1.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../ford/frd2.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../ford/frd3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../ford/frd4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../ford/frd5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    
  ];
  const [img, setImg] = useState(images);

  
  const cars = [
    {
      name: 'FORD BRONCO RAPTOR',
      imgUrl:'../ford/FORD_BRONCO_RAPTOR.jpg',
      speed:"183kmph",
power:"418bhp",
price:"60Lakh*",
specs:"Ford's Bronco Raptor is a high-flying performance SUV that goes way beyond its off-road ancestor. Unlike the standard Bronco, the Raptor variant comes with twin-turbo V-6 engine, a Fox suspension system with greater off-road capability, and 37-inch all-terrain tires for maximum traction.",
      company:"Ford"
    },
    {
      name:"FORD ENDAVOUR",
      imgUrl:'../ford/FORD_ENDAVOUR.webp',
      speed:"165kmph",
      power:"168bhp",
      price:"50 Lakh*",
      company:"Ford",
      specs:"The Ford Endeavour has 3.0-Litre V6 turbo Engine . The Diesel engine is 2998 cc .It gives a mileage of 13.9 kmpl. Ford Endeavour Titanium 2.0 4x2 AT is available in Automatic transmission."

    },
    {
      name: 'FORD EXPLORER',
      imgUrl:'../ford/FORD_EXPLORER.webp',
      speed:"200kmph",
      power:"388bhp",
      price:"55Lakh*",
      company:"Ford",
      specs:"The FORD Explorer is powered by a turbocharged 3.0-liter V-6. A 10-speed automatic transmission and rear-wheel drive are standard, but all-wheel drive is available. Ride and handling are composed and predictable. "
    },
    {
      name: 'FORD MUSTANG DARK HORSE',
      imgUrl: '../ford/FORD_MUSTANG_DARK_HORSE.jpg',
      speed:"270kmph",
      power:"500bhp",
      price:"71 Lakh*",
      
      specs:"The Mustang's base powertrain is a turbocharged 2.3-liter four-cylinder EcoBoost engine.At our test track, a Mustang GT with the performance exhaust system ripped to 60 mph in 4.2 seconds.It has 6-speed Manual Transmission.",
            company:"Ford"
    },
    {
      name: 'FORD MUSTANG SHELBY GT500',
      imgUrl: '../ford/FORD_MUSTANG_SHELBY_GT500.jpg',
      speed:"290kmph",
power:"740bhp",
price:"75 Lakh*",

specs:"The most powerful engine ever stuffed into a Ford production car lurks behind the Shelby GT500's menacing mug. Aptly called Predator, the motor is a supercharged 5.2-liter V-8 engine.That prodigious power twists the rear wheels through a clairvoyant seven-speed dual-clutch automatic transmission ",
      company:"Ford"
    },
    {
      name: "FORD RANGER RAPTOR",
      imgUrl: '../ford/FORD_RANGER_RAPTOR.webp',
      speed:"188kmph",
power:"210bhp",
price:"75 Lakh*",
specs:"he 2024 Ranger Raptor features a twin-turbocharged 3.0-liter V-6 engine.which includes a 10-speed automatic transmission and standard four-wheel drive, complete with locking front and rear differentials. Compared to its pedestrian counterpart, the Raptor has a sturdier suspension and beefier off-road equipment. ",

      company:"Ford"
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
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id} company={company} specs={specs} />
        
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

export default Ford
