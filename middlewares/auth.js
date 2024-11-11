const checkRole = (role) => {
    return (req, res, next) => {
        // Assuming you have user data stored in req.user after authentication
        if (req.user && req.user.role === role) {
            next(); // User has the required role
        } else {
            res.status(403).json({ error: 'Forbidden' }); // User does not have the required role
        }
    };
};

module.exports = { checkRole };
