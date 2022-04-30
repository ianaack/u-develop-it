const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ackerman@2112",
  database: "election",
});

module.exports = db;
