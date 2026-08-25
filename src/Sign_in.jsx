import './login.css'
import video from './bg_video.mp4'
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import Validation from'./LoginValidation'
import Axios from 'axios';

const Sign_in = () => {
  const [sub, setsub] = useState({
    email:'',
    password:""
  })
  const[errors,seterrors]= useState({})

  const handsub=(evt)=>{
     evt.preventDefault();
     seterrors(Validation(sub))


     
    if (!errors.email && !errors.password) {
      Axios.post('http://localhost:5000/signin', sub)
  .then((res) => {
    console.log(res.data);
    alert("Login successful!");
    // Redirect to the dashboard or perform any other actions upon successful login
  })
  .catch((err) => {
    console.error(err);
    alert("Invalid credentials. Please try again.");
    // Handle sign-in error, such as displaying an error message to the user
  });
    }
  }

  const change = (evt)=>{
setsub(prev => ( {...prev,[evt.target.name]:[evt.target.value]}))
  }
  return (
    <>
 
    <video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>

<div>
  <Navbar/>
</div>
 
 <div className="b">
<div className="Box">
  <form action="" onSubmit={handsub}>
  <div className="all">
    <h2 className='head'>Login</h2>
 <h3  className='headi'>Email:</h3>   
<div className="Login text-light">
<input type="text" placeholder='xyz@gmail.com' name="email" onChange={change}/>
{errors.email && <span className='error'>{errors.email}</span>}
</div>
<h3 className='headi'>Password:</h3>
<div className="Login text-light">
<input type="text" placeholder='Enter your Password' name = "password" onChange={change}/>
{errors.password && <span className='error'>{errors.password}</span>}
</div>
<div className="sub">
<button className="Sign-Up">
    Login
</button>

<p className='p'>Don't have an acoount? <span><Link to="/Login">Sign-Up</Link></span></p>
</div>
</div>
</form>
</div>
</div>
    </>
  )
}

export default Sign_in

