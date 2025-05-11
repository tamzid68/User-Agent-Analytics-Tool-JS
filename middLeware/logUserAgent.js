const fs = require('fs');
const path = require('path');

const logUserAgent = (req, res, next)=>{
    const userAgent = req.headers['user-agent'];
    const logEntry={
        userAgent,
        timestamp: new Date().toISOString(),
    };

    const logFilePath = path.join(__dirname, '../userAgent.json');

    fs.readFile(logFilePath, 'utf8', (err, data) => {
        let logs =[];
        if (!err && data) {
            try {
                logs = JSON.parse(data);
            } 
            catch (parseErr) {
                console.error('Error parsing user agent log file:', parseErr);
            }
        }
    logs.push(logEntry);

        fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error writing user agent log file:', writeErr);
            }
        });
    });
    next();

};

module.exports = logUserAgent;