const e = require('express');
const fs = require('fs');
const path = require('path');

const categorizeUserAgent = (userAgent) => {
    if (/PostmanRuntime/.test(userAgent)) return 'Postman';
    if (/Thunder Client/.test(userAgent)) return 'Thunder Client';
    if (/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) return 'Chrome Browser';
    if (/Edge/.test(userAgent)) return 'Edge Browser';
    if (/curl/.test(userAgent)) return 'curl';
    return 'Other';
  };

  const gerUserAgentAnalytics = (req,res)=>{
    const logFilePath = path.join(__dirname,'../userAgent.json');

    fs.readFile(logFilePath, 'utf8', (err,data)=>{
        if (err) {
            return res.status(500).json({ error: 'Failed to read user agent data.' });
          }


          const logs = JSON.parse(data);
          const analytics = {
            Postman: 0,
            'Thunder Client': 0,
            'Chrome Browser': 0,
            'Edge Browser': 0,
            curl: 0,
            Other: 0,
          };

        logs.forEach((entry) => {
            const category = categorizeUserAgent(entry.userAgent);
            analytics[category]++;
          });
          res.json(analytics);

    });
  };

  module.exports = { gerUserAgentAnalytics };