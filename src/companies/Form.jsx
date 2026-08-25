// import React from 'react'
// import "./form.css"


// const Form = (props) => {

// console.log(props.imgUrl)

//     return (
//         <>
//             <div className='form'>
//                 <div className="image">
//                     <img src={props.imgUrl} alt="" />
//                 </div>
//                 <form action="">
//                     <div className="text">
//                         <div className="in">
//                             <label for="fname">First Name</label>
//                             <input type="text" id="fname" name="firstname" placeholder="Your name" />
//                         </div>
//                         <div className="in">
//                             <label for="lname">Last Name</label>
//                             <input type="text" id="lname" name="lastname" placeholder="Your last name" />
//                         </div>
//                         <div className="in">
//                             <label for="lname">Your Annual Income</label>
//                             <input type="text" id="lname" name="lastname" placeholder="Your Anual Income" />
//                         </div>
//                         <div className="in">
//                             <label for="lname">Your Account No</label>
//                             <input type="text" id="lname" name="lastname" placeholder="Your Account No" />
//                         </div>
//                         <div className="city">
//                             <label for="country">Payment Type</label>
//                             <select id="country" name="country" className='option'>
//                                 <option value="australia">Cash</option>
//                                 <option value="canada">Loan</option>
//                                 {/* <option value="usa">Mumbai</option> */}
//                             </select>
//                         </div>

//                         <div className="city">
//                             <label for="country">City</label>
//                             <select id="country" name="country" className='option'>
//                                 <option value="australia">Ahemdabad</option>
//                                 <option value="canada">Delhi</option>
//                                 <option value="usa">Mumbai</option>
//                             </select>
//                         </div>
//                     </div>
//                 </form>
//                 <div className="btns">
//                     <button className='submit bg-primary'>By Now</button>
//                     <button className='cancel bg-danger'>Cancel</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Form;

import React, { useState } from 'react';
import "./form.css";
import { useLocation } from 'react-router-dom';
import video from '../bg_video.mp4'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';





const Form = ({companyName}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const carName = searchParams.get('car');
    const Company = searchParams.get('company')


    const [formData, setFormData] = useState({
        company:Company,
        carname:carName,
        name: '',
        email: '',
        income:"",
        accountno:"",
        paymenttype: 'cash',
        city: 'ahmedabad', 
    });
    const [errors, setErrors] = useState({});

    // Form submission handler
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Perform form validation
        const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
        // If no validation errors, submit the form
        Axios.post("http://localhost:5000/form", formData)
        .then(res => {
            console.log(res.data);
            alert("Form submitted successfully");
            navigate(-1); 

            // Go back to the previous page or handle redirection as needed
        })
        .catch(err => {
            console.error('Error occurred while submitting form:', err);
            alert("Error occurred while submitting form. Please try again.");
        });
    }
    };

    // Form field change handler
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Form validation function
    const validateForm = (data) => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = 'First Name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.income.trim()) {
            errors.income = 'Annual Income is required';
        } else if (!/^\d+$/.test(data.income)) {
            errors.income = 'Annual Income must be a number';
        }

        if (!data.accountno.trim()) {
            errors.accountno = 'Account No is required';
        } else if (!/^\d+$/.test(data.accountno)) {
            errors.accountno = 'Account No must be a number';
        }
        return errors;
    };
    return (
        <div className="whole">
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className='form' >
                <form className="frm" onSubmit={handleSubmit}>
                    <div className="text">
                    <div className="in">
                            <label htmlFor="fname">Company Name</label>
                            <input className='carn' type="text" id="cname" name="companyname" placeholder={Company} readOnly value={formData.company}/>
                        </div>
                        <div className="in">
                            <label htmlFor="fname">Car model Name</label>
                            <input className='carn' type="text" id="cname" name="carname" placeholder={carName} readOnly value={formData.carname} />
                        </div>
                        <div className="in">
                            <label htmlFor="fname">Name</label>
                            <input type="text" id="fname" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                            {errors.name && <span className='error text-danger'>{errors.name}</span>}
                        </div>
                        <div className="in">
                            <label htmlFor="lname">Email</label>
                            <input type="text" id="lname" name="email" placeholder="Your Email-Id" value={formData.email} onChange={handleChange} />
                            {errors.email && <span className='error text-danger'>{errors.email}</span>}
                        </div>
                        <div className="in">
                            <label htmlFor="lname">Your Annual Income</label>
                            <input type="text" id="lname" name="income" placeholder="Your Annual Income($)" value={formData.income} onChange={handleChange} />
                            {errors.income && <span className='error text-danger'>{errors.income}</span>}
                        </div>
                        <div className="in">
                            <label htmlFor="lname">Your Account No</label>
                            <input type="text" id="lname" name="accountno" placeholder="Your Account No" value={formData.accountno} onChange={handleChange} />
                            {errors.accountno && <span className='error text-danger'>{errors.accountno}</span>}
                        </div>
                        <div className="city">
                            <label htmlFor="country">Payment Type</label>
                            <select id="country" name="paymenttype" className='option' value={formData.paymenttype} onChange={handleChange}>
                                <option value="cash">Cash</option>
                                <option value="loan">Loan</option>
                            </select>
                        </div>
                        <div className="city">
                            <label htmlFor="city">City</label>
                            <select id="city" name="city" className='option' value={formData.city} onChange={handleChange}>
                                <option value="ahmedabad" className='opt bg-transparent'>Ahmedabad</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                        </div>
                    </div>
                    <div className="btns">
                        <button type='submit' className='submit bg-primary'>Buy Now</button>
                        <button className='cancel bg-danger' onClick={goBack}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
