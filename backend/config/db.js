require("ditenv").config()
const mysql = require("mysql")

const pool = mysql.createPool({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
});

module.exports = pool;
  

