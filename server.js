const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoute = require('./routes/user');
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
