import React,{useState} from 'react'
import './login.css'
import { Link } from "react-router-dom";
import video from './vid.mp4'
import Navbar from './Navbar';
import Validation from './Signup_Validation'
import Axios  from 'axios';
const Login = () => {

  const [sub, setsub] = useState({
    name:'',
    email:'',
    password:""
  })
  const[errors,seterrors]= useState({})
  const suc = document.querySelector(".suc")
  
// function success(){
//   if(handsub){
//   suc.style.display="block"
//   }
// }
  const handsub=(evt)=>{
     evt.preventDefault();
     seterrors(Validation(sub))
     if(errors.name === "" && errors.email==="" && errors.password==="" ){
      Axios.post("http://localhost:5000/signup",sub)
   .then(res => {console.log(res);
})
   .catch(err => console.log(err))
    }
  }

  const change = (evt)=>{
setsub(prev => ( {...prev,[evt.target.name]:[evt.target.value]}))
  }
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div>
        <Navbar />
      </div>


      <div className="b">
        <div className="Box">
        <form action="" onSubmit={handsub}>
          <div className="all">
        <h2 className='head'>Sign-Up</h2>
        {/* <h3 className='suc text-success'>you have sign-up sucessfully</h3> */}
        <h3 className='headi'>Name:</h3>
          <div className="Login text-light">
            <input type="text" placeholder='Enter your Name' name ="name" onChange={change} />
            {errors.name && <span className='error'>{errors.name}</span>}
          </div>
          <h3 className='headi'>Email-id:</h3>
          <div className="Login text-light" onChange={change}> 
            <input type="text" placeholder='xyz@gmail.com' name = "email" onChange={change} />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
          <h3 className='headi'>Password:</h3>
          <div className="Login text-light">
            <input className='Login text-light' type="text" placeholder='Enter password' name="password" onChange={change}/>
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          <div className="sub">
          <button className="Sign-Up">
            Sign-Up
          </button>
          <p className='p'>Allready have an acoount? <span><Link to="/Sign_in">Sign-In</Link></span></p>
          </div>
          
          </div>
          </form>
          </div>
  
        </div>
    </>
  )
}

export default Login
