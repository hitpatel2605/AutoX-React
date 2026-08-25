import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Walks = () => {
  const images = [
    {
      name: 'Mercedes-Benz-AMG-GT',
      imageUrl: '../cars/car6.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'audi R8',
      imageUrl: '../cars/car8.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'bugatti CHIRON SUPER SPORT',
      imageUrl:'../cars/car3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'BMW M5',
      imageUrl: '../cars/car4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      name: 'porsche GT3 RS',
      imageUrl: '../cars/car5.jpg',
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
      name: 'Golf-R',
      imgUrl:'../volkswagen/Golf-R.jpg',
      speed:"180m/s",
      power:"22hp",
      price:"1200000"
    },
    {
      name: 'Jetta-GLI',
      imgUrl:'../volkswagen/Jetta-GLI.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Polo-BlueGT',
      imgUrl:'../volkswagen/Polo-BlueGT.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Tiguan',
      imgUrl: '../volkswagen/Tiguan.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Touareg-R',
      imgUrl: '../volkswagen/Touareg-R.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'VIRTUS',
      imgUrl: '../volkswagen/VIRTUS.webp',
      speed:"",
      power:"",
      price:""
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
        const{id,name,imgUrl,speed,power,price}= value
      return(
        <>
         
        <Card name={name} imgUrl={imgUrl}  speed={speed} power={power} price={price} key={id}/>
        
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

export default Walks
