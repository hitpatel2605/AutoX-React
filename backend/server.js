// const express = require("express");
// const mysql = require("mysql");
// const util = require("util");
// require("dotenv").config();
// const cors = require('cors');
// const app = express();

// const pool = mysql.createPool({
//     host: process.env.Host,
//     user: process.env.User,
//     password: process.env.Password,
//     database: process.env.Database,
// });

// // Promisify the query method
// pool.query = util.promisify(pool.query);
// const sql = "SELECT * FROM login;";

// // Now you can use pool.query as a promise
// pool.query(sql,function(err,res){
//     if(err) throw err;

//     console.log(res)
// })

// module.exports = pool; // Export the pool object

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.listen(5000,()=>{
//          console.log("server is running on 5000")
//     })


// require("dotenv").config();

// // const express = require("express")
// const mysql = require("mysql")
// // const cors = require("cors")
// const pool = mysql.createPool({
//     host:process.env.Host,
//     user:process.env.User,
//     password:process.env.Password,
//     database:process.env.Database,
// });

// let sql = "SELECT * FROM login"


// pool.query(sql,function(err,res){
//     if(err) throw err;

//     console.log(res)
// })
// module.exports = pool.promise();



// const app = express()
// app.use(cors());
// app.use(express.json())



// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"signup",
// })

// app.post('/Login',(req,res)=>{
//     const sql = "INSERT INTO login (`name`,`email`,`password`)Values(?)"
//     const values=[
// req.body.name,
// req.body.email,
// req.body.password
//     ] 

    // db.query(sql,[values],(err,data)=>{
    //     if (err) {
    //         console.error("Error inserting into database:", err);
    //         return res.status(500).json({ error: err.message }); // Return error message from MySQL
    //     }
    //     console.log("Data inserted successfully:", data);
    //     return res.json({ success: true });
    // })

// app.listen(3001,()=>{
//     console.log("listening")
// })






const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());
app.use(express.json());

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'signup'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to handle signup
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received signup request:', { name, email, password }); // Log the received data
    const INSERT_USER_QUERY = `INSERT INTO login (name, email, password) VALUES (?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error occurred while signing up:', err); // Log the error
        res.status(500).json({ message: 'Error occurred while signing up', error: err.message }); // Return error message to the client
      } else {
        console.log('User signed up successfully');
        alert("you have successfully signup");
        res.status(200).json({ message: 'User signed up successfully' });
      }
    });
  });
  
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const d = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'buyers' // Update with your database name
});

// Connect to MySQL
d.connect(err => {
  if (err) {
    throw err; 
  }
  console.log('Connected to MySQL database');
});

app.post('/form', (req, res) => {
  const { company,carname,name, email, income, accountno, paymenttype, city} = req.body;
  console.log('Received form submission:', { company,carname,name, email, income, accountno, paymenttype, city}); // Log the received data
  // Insert the form data into the database
  const INSERT_FORM_QUERY = `INSERT INTO form_data (company,carname, name,email, income, accountno, paymenttype, city) VALUES (?, ?, ?, ?, ?, ?, ?,?)`;

  d.query(INSERT_FORM_QUERY, [company,carname,name, email, income, accountno, paymenttype, city], (err, result) => {
    if (err) {
      console.error('Error occurred while submitting form:', err); // Log the error
      res.status(500).json({ message: 'Error occurred while submitting form', error: err.message }); // Return error message to the client
    } else {
      console.log('you booked successfully');
      res.status(200).json({ message: 'Form submitted successfully' });
    }
  });
});

app.post('/contact', (req, res) => {
  const { name, email,phone_no, query } = req.body;
  console.log('Received contact form submission:', { name, email, phone_no, query }); // Log the received data
  const INSERT_CONTACT_QUERY = `INSERT INTO queries (name, email, phone_no, query) VALUES (?, ?, ?, ?)`;
  d.query(INSERT_CONTACT_QUERY, [name, email, phone_no, query], (err, result) => {
    if (err) {
      console.error('Error occurred while submitting contact form:', err); // Log the error
      res.status(500).json({ message: 'Error occurred while submitting contact form', error: err.message }); // Return error message to the client
    } else {
      console.log('Contact form submitted successfully');
      res.status(200).json({ message: 'Contact form submitted successfully' });
    }
  });
});


// API endpoint to handle sign-in
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  console.log('Received sign-in request:', { email, password }); // Log the received data
  const SELECT_USER_QUERY = `SELECT * FROM login WHERE email = ? AND password = ?`;
  db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
    if (err) {
      console.error('Error occurred while signing in:', err); // Log the error
      res.status(500).json({ message: 'Error occurred while signing in', error: err.message }); // Return error message to the client
    } else {
      if (result.length > 0) {
        console.log('User signed in successfully');
        res.status(200).json({ message: 'User signed in successfully' });
      } else {
        console.log('Invalid credentials');
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });
});






//LOGIN PAGE
// Existing imports
// const bcrypt = require('bcrypt');

// // Existing code for setting up the Express server and connecting to MySQL

// // API endpoint to handle sign-in
// app.post('/signin', (req, res) => {
//   const { email, password } = req.body;
//   const SELECT_USER_QUERY = `SELECT * FROM login WHERE email = ?`;
//   db.query(SELECT_USER_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error occurred while signing in' });
//     } else {
//       if (results.length > 0) {
//         const user = results[0];
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (err) {
//             console.error(err);
//             res.status(500).json({ message: 'Error occurred while signing in' });
//           } else {
//             if (result) {
//               res.status(200).json({ message: 'Sign-in successful' });
//             } else {
//               res.status(401).json({ message: 'Invalid email or password' });
//             }
//           }
//         });
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     }
//   });
// });
