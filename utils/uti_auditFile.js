const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '../audit.json');

// Function to save audit log
const saveAuditLog = (logEntry) => {
    let logData = [];
    if (fs.existsSync(logFile)) {
        const data = fs.readFileSync(logFile);
        logData = JSON.parse(data);
    }
    logData.push(logEntry);

    fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));
}

module.exports = saveAuditLog;