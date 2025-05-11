const saveAuditLog = require('../utils/uti_auditFile'); // Assuming you have a function to save logs

const auditLogger = (req, res, next) => {
    const logEntry = {
        method: req.method,
        url: req.originalUrl,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        timestamp: new Date().toISOString(),
        headers: {
            'user-agent': req.headers['user-agent'],
            'accept-language': req.headers['accept-language'],
            'accept-encoding': req.headers['accept-encoding'],
            'content-type': req.headers['content-type'],
            'host': req.headers['host'],
            'connection': req.headers['connection']
        }
    };
    // Save the log entry to a file or database
    saveAuditLog(logEntry);
    next();
};

module.exports = auditLogger;