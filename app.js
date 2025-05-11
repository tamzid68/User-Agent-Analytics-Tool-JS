const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/rou_user.js');
const downloadRouter = require('./routes/rou_download.js');
const {checkUserAgent} = require('./middLeware/mid_user.js');
const auditLogger = require('./middLeware/mid_auditLogger.js');
const logUserAgent = require('./middLeware/logUserAgent.js')
const path = require('path');

app.use(express.json());

app.use(logUserAgent)

app.use('/api',checkUserAgent, auditLogger, userRouter);
app.use('/ap',downloadRouter);

app.use(express.static('views'));
app.get('/analytics', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/analytics.html'));
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});