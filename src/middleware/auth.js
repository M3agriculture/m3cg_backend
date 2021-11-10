const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ result: false, message: "Auth token is missing or invalid" });
        }
        
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ result: false, message: "Auth token is missing or invalid" });
    }
    return next();
};

module.exports = verifyToken;