exports.getAllPosts = async (req,res,next) =>{
    res.send("get all post route")
}

const pool = require('../path/to/your/mysql/connection')

exports.careateNewPost = async (req,res,next) =>{
  res.send("create all post route")
    // const { name, email, password } = req.body; // Assuming your form sends these fields

    // // Assuming you have a table named 'users' with columns 'name', 'email', and 'password'
    // const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    // try {
    //   // Execute the SQL query using the connection pool
    //   await pool.query(sql, [name, email, password]);
      
    //   // Respond with a success message
    //   res.status(200).json({ message: 'User created successfully' });
    // } catch (error) {
    //   // If an error occurs, send an error response
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
}

exports.getPostById = async (req,res,next) =>{
    res.send("get post by id")
}