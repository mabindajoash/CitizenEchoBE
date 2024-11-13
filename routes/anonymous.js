const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { title, description } = req.body;

    // Insert anonymous report into the database
    const query = 'INSERT INTO reports (title, description, report_type) VALUES (?, ?, "anonymous")';
    db.query(query, [title, description], (err, results) => {
        if (err) {
            console.error('Error submitting anonymous report:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Anonymous report submitted successfully' });
        console.log('Anonymous report submitted successfully');
    });
});

module.exports = router;
