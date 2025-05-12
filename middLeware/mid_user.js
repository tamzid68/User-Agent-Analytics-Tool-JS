//const rateLimit = require('express-rate-limit');
const { saveUserAgent, saveBlockedUser } = require('../utils/uti_logger.js');
//const logUserAgent = require('../middLeware/logUserAgent.js');
//const express = require('express');
//const app = express();

const checkUserAgent = (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    const logEntry = {
        userAgent,
        timestamp: new Date().toISOString(),
    };

    //console.log(userAgent);

    if (!userAgent) {

        return res.status(400).json({ message: 'baba tomar abastha sandehajanaka' });
    }

    else if (isBlockedUserAgent(userAgent)) {
        saveBlockedUser(userAgent)
        return res.status(400).json({ message: 'baba tomar abastha sandehajanaka' });
    }
    // Log the user agent
    saveUserAgent(logEntry);
    //app.use(logUserAgent);
    next();
}

// Middleware to check for blocked user agents
const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /java/i,
    /php/i,
    /node-fetch/i,
    /python/i,
    /go-http-client/i,
    /ruby/i,
    /httpclient/i
];
const isBlockedUserAgent = (userAgent) => {
    return blockedPatterns.some(pattern => pattern.test(userAgent));
};


module.exports = { checkUserAgent };