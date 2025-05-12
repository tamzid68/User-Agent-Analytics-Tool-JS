const fs = require('fs');
const path = require('path');

// Function to download CSV file
const downloadCsv = (req,res)=>{
    const logFilePath = path.join(__dirname,'../userAgent.json');
    const logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));

    let csv = 'User Agent, Timestamp\n';
    logs.forEach((entry) => {
        csv += `${entry.userAgent}, ${entry.timestamp}\n`;
    });

    res.setHeader('Content-disposition', 'attachment; filename=userAgent.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);

};

module.exports = {downloadCsv};