const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Importing routes
const userRouter = require('./routes/rou_user.js');
//const downloadRouter = require('./routes/rou_download.js');

//Importing middleware
const { checkUserAgent } = require('./middLeware/mid_user.js');
const auditLogger = require('./middLeware/mid_auditLogger.js');
const rateLimit = require('./middLeware/mid_rateLimit.js');
//const logUserAgent = require('./middLeware/logUserAgent.js')


app.use(express.json());//Middleware to parse JSON
app.use(express.static('views'));//Serve static files
app.use(rateLimit);//Rate limiting middleware

//app.use(logUserAgent)

//api route
app.use('/api', checkUserAgent, auditLogger, userRouter);


//Serve page
app.get('/analytics', checkUserAgent, auditLogger, (req, res) => {
  res.sendFile(path.join(__dirname, 'views/analytics.html'));
});


//Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});