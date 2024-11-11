const express = require('express');
const router = express.Router();
const { registerUser, fetchUsers } = require('../controllers/userController');

// POST /api/users/register - Register a new user
router.post('/register', registerUser);

// GET /api/users - Fetch all users
router.get('/', fetchUsers);

module.exports = router;
