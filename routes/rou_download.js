//for now this file is not used

/*const express = require('express');
const router = express.Router();
const {gerUserAgentAnalytics} = require('../controllers/con_analytics.js');
//const {getAll} = require('../controllers/con_user.js');
const {downloadCsv} = require('../utils/uti_download.js');


router.get('/user-agent', gerUserAgentAnalytics);

router.get('/download', downloadCsv);
    
    (req,res)=>{
    const logFilePath = path.join(__dirname,'../userAgent.json');
    const logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));

    let csv = 'User Agent, Timestamp\n';
    logs.forEach((entry) => {
        csv += `${entry.userAgent}, ${entry.timestamp}\n`;
    });

    res.setHeader('Content-disposition', 'attachment; filename=userAgent.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);

});

module.exports = router;
*/