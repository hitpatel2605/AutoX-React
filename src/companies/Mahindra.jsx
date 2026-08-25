import React,{useState} from 'react'
import Navbar from '../Navbar'
import "./audi.css";
import Carousel2 from '../Carousel2';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
const Mahindra = () => {
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
      name: 'Bolero',
      imgUrl:'../mahindra/bolero.webp',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Scorpio N',
      imgUrl:'../mahindra/scorpio_n.webp',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Scorpio s11',
      imgUrl:'../mahindra/scorpio_s11.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'Thar',
      imgUrl: '../mahindra/Thar.jpg',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'XUV300',
      imgUrl: '../mahindra/xuv300.webp',
      speed:"",
      power:"",
      price:""
    },
    {
      name: 'XUV700',
      imgUrl: '../mahindra/xuv700.webp',
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

export default Mahindra
