const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 10*1000, // 10 seconds
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});

module.exports = rateLimiter;