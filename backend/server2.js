// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// // Allow cross-origin requests
// app.use(cors());
// app.use(express.json());

// // Create connection to MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root123',
//   database: 'signup'
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// // API endpoint to handle sign-in
// app.post('/signin', (req, res) => {
//     const { email, password } = req.body;
//     console.log('Received sign-in request:', { email, password }); // Log the received data
//     const SELECT_USER_QUERY = `SELECT * FROM login WHERE email = ? AND password = ?`;
//     db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//       if (err) {
//         console.error('Error occurred while signing in:', err); // Log the error
//         res.status(500).json({ message: 'Error occurred while signing in', error: err.message }); // Return error message to the client
//       } else {
//         if (result.length > 0) {
//           console.log('User signed in successfully');
//           res.status(200).json({ message: 'User signed in successfully' });
//         } else {
//           console.log('Invalid credentials');
//           res.status(401).json({ message: 'Invalid credentials' });
//         }
//       }
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
