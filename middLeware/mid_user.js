//const rateLimit = require('express-rate-limit');

const checkUserAgent = (req, res, next) => {
    const userAgent = req.headers['user-agent'];

    console.log(userAgent);
    if (!userAgent || isBlockedUserAgent(userAgent)) {
        return res.status(400).json({ message: 'baba tomar abastha sandehajanaka' });
    }
    next();
}

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