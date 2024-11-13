const express = require('express');
const db = require('../config/db');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

// Inquiries route to handle form submissions
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Insert inquiry into the database
    const query = `
        INSERT INTO inquiries (name, email, message) 
        VALUES (?, ?, ?)
    `;
    
    db.query(query, [name, email, message], (err, results) => {
        if (err) {
            console.error('Error submitting inquiry:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Inquiry submitted successfully' });
    });
});

// GET route to fetch all inquiries (only for authorized users)
router.get('/', verifyToken, (req, res) => {
    const query = 'SELECT * FROM inquiries ORDER BY created_at DESC';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching inquiries:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);  // Return the list of inquiries
    });
});

module.exports = router;
