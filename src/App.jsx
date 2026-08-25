import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sign_in from './Sign_in';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Audi from './companies/Audi';
import BMW from './companies/BMW';
import Ferr from './companies/Ferr';
import Bently from './companies/Bently'; 
import Bughati from './companies/Bughati';
import Merc from './companies/Merc';
import Lamb from './companies/Lamb';
import Land from './companies/Land';
import Walks from './companies/Walks';
import Toyo from './companies/Toyo';
import Tata from './companies/Tata';
import Porse from './companies/Porse';
import Jaguar from './companies/Jaguar';
import Mahindra from './companies/Mahindra';

import Ford from './companies/Ferr';
import Rolls from './companies/Rolls';
import Form from './companies/Form';

function App() {
  return (
    <>
 
    <Router>
      <Routes>

 <Route exact path="/" element = {<Home/>}></Route>
     <Route exact path="/Service" element ={<Services/>}></Route> 
     <Route exact path="/Contact" element ={<Contact/>}></Route> 
      <Route exact path="/Login"  element={<Login/>}/>
      <Route exact path="/Sign_in" element={<Sign_in/>}/>
      <Route exact path="/Audi" element ={<Audi/>}></Route>
     {/* <Route exact path="/Bently" element ={<Bently/>}></Route> */}
     <Route exact path="/BMW" element ={<BMW/>}></Route>
     <Route exact path="/Bughati" element ={<Bughati/>}></Route>
     <Route exact path="/Jaguar" element ={<Jaguar/>}></Route>
     <Route exact path="/Ferr" element ={<Ferr/>}></Route>
     <Route exact path="/Ford" element ={<Ford/>}></Route>
     <Route exact path="/Lamb" element ={<Lamb/>}></Route>
     <Route exact path="/Land" element ={<Land/>}></Route>
     {/* <Route exact path="/Mahindra" element ={<Mahindra/>}></Route> */}
     <Route exact path="/Merc" element ={<Merc/>}></Route>
     <Route exact path="/Porse" element ={<Porse/>}></Route>
     <Route exact path="/Rolls" element ={<Rolls/>}></Route>
    
     {/* <Route exact path="/Tata" element ={<Tata/>}></Route> */}
     <Route exact path="/Toyo" element ={<Toyo/>}></Route>
     {/* <Route exact path="/Walks" element ={<Walks/>}></Route> */}
     <Route exact path="/Form" element = {<Form/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
