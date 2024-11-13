const jwt = require('jsonwebtoken');

const testTokenVerification = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Manual verification successful:", decoded);
    } catch (err) {
        console.error("Manual verification failed:", err.message);
    }
};

// Replace <your-token> with the actual token string for testing
testTokenVerification("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywid…I0Mn0.GFS0atML7VjL2D1j1oHzfY2B9YQ1rdwbUJt1zxMG-Pk");
