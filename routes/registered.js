const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { title, description, userId, email, phone } = req.body;

    const query = `
        INSERT INTO reports (title, description, report_type, user_id, email, phone) 
        VALUES (?, ?, "registered", ?, ?, ?)
    `;
    
    db.query(query, [title, description, userId, email, phone], (err, results) => {
        if (err) {
            console.error('Error submitting registered report:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Registered report submitted successfully' });
    });
});

module.exports = router;
