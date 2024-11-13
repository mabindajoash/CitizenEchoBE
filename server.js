const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const anonymousRoute = require('./routes/anonymous');
const registeredRoute = require('./routes/registered');
const caseRoute = require('./routes/cases');
const inquiriesRoute = require('./routes/inquiries');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/reports/anonymous', anonymousRoute);
app.use('/api/reports/registered', registeredRoute);
app.use('/api', caseRoute);
app.use('/api/inquiries', inquiriesRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
