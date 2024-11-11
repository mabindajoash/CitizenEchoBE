const db = require('../config/db');

// Register a new user
const registerUser = (req, res) => {
    const { username, password, role } = req.body;
    const userRole = role === 'admin' ? 'admin' : 'reporter';

    db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, userRole], (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
};

// Fetch all users
const fetchUsers = (req, res) => {
    db.query('SELECT id, username, role FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err.message || err);
            return res.status(500).json({ error: 'Database error', details: err.message || err });
        }
        res.json(results);
    });
};

module.exports = { registerUser, fetchUsers };
