const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader) {
        return res.status(403).json({ error: 'Token is required' });
    }
    
    const token = authHeader.split(' ')[1];  // Extract token after "Bearer"
    if (!token) {
        return res.status(403).json({ error: 'Token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error("JWT verification failed:", err);
            return res.status(403).json({ error: 'Invalid or expired token' });
        }

        console.log("Decoded token:", decoded);  // Add this to check decoded payload
        req.user = decoded;  // Attach decoded user info to request
        next();
    });
};

module.exports = verifyToken;
