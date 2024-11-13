const express = require('express');
const db = require('../config/db');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

// Route to fetch all reports (anonymous + registered) with token verification
router.get('/cases', verifyToken, (_req, res) => {
    console.log('Fetching all cases');  // Add this log
    const query = 'SELECT * FROM reports';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching cases:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ cases: results });
    });
});


module.exports = router;
