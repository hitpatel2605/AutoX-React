// import React from 'react'
// import Navbar from "./Navbar"

// import "./contact.css"
// const Contact = () => {
//   return (
//     <div className='contact'>
//       <Navbar/>
//       <div className="full">
     
//       <div className="co">
     
//         <form className="fm" action="">
//         <h2>Contact-Us</h2>
// <div className="input">
//   <label htmlFor="" className='lab'>Your Name:</label>
//   <input type="text" placeholder='Enter Your Name' className='inp'/>
// </div>
// <div className="input">
//   <label htmlFor="" className='lab'>Email-Id:</label>
//   <input type="text" placeholder='Enter Your Email-id' className='inp'/>
// </div>
// <div className="input">
//   <label htmlFor="" className='lab'>mobile No:</label>
//   <input type="text" placeholder='Your Mobile no' className='inp'/>
// </div>
// <div className="input">
//   <label htmlFor=""  className='lab'>Query:</label>
//   <input type="text" placeholder='Enter The Problem which you have in Your Car' className='txt'/>
// </div>
// <div className="bn">submit</div>
// </form>
//       </div>
//       </div>
//     </div>

//   )
// }

// export default Contact

import React, { useState } from 'react';
import Navbar from "./Navbar"
import "./contact.css"
import Axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_no: '',
        query: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // If no validation errors, submit the form
            Axios.post("http://localhost:5000/contact", formData)
                .then(res => {
                    console.log(res.data);
                    alert("Form submitted successfully");
                    // Reset form fields after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        phone_no: '',
                        query: ''
                    });
                })
                .catch(err => {
                    console.error('Error occurred while submitting form:', err);
                    alert("Error occurred while submitting form. Please try again.");
                });
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.phone_no.trim()) {
            errors.phone_no = 'Mobile No is required';
        } else if (!/^\d{10,}$/.test(data.phone_no)) {
            errors.phone_no = 'Mobile No must be 10 digits';
        }
        if (!data.query.trim()) {
            errors.query = 'Query is required';
        }
        return errors;
    };

    return (
        <div className='contact'>
            <Navbar />
            <div className="full">
                <div className="co">
                    <form className="fm" onSubmit={handleSubmit}>
                        <h2>Contact-Us</h2>
                        <div className="input">
                            <label htmlFor="name" className='lab'>Your Name:</label>
                            <input type="text" id="name" name="name" placeholder='Enter Your Name' className='inp' value={formData.name} onChange={handleChange} />
                            {errors.name && <span className='error text-danger'>{errors.name}</span>}
                        </div>
                        <div className="input">
                            <label htmlFor="email" className='lab'>Email-Id:</label>
                            <input type="text" id="email" name="email" placeholder='Enter Your Email-id' className='inp' value={formData.email} onChange={handleChange} />
                            {errors.email && <span className='error text-danger'>{errors.email}</span>}
                        </div>
                        <div className="input">
                            <label htmlFor="mobile" className='lab'>Mobile No:</label>
                            <input type="text" id="mobile" name="phone_no" placeholder='Your Mobile no' className='inp' value={formData.phone_no} onChange={handleChange}/>
                            {errors.phone_no && <span className='error text-danger'>{errors.phone_no}</span>}
                        </div>
                        <div className="input">
                            <label htmlFor="query" className='lab'>Query:</label>
                            <textarea id="query" name="query" placeholder='Enter The Problem which you have in Your Car' className='txt' value={formData.query} onChange={handleChange}></textarea>
                            {errors.query && <span className='error text-danger'>{errors.query}</span>}
                        </div>
                        <button type="submit" className="bn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
