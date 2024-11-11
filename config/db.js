const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
// Create a MySQL connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
        connection.release(); // Release the connection back to the pool
    }
});

// Export the connection pool
module.exports = db;
