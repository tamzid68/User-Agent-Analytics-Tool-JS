const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/rou_user.js');
const {checkUserAgent} = require('./middLeware/mid_user.js');
const auditLogger = require('./middLeware/mid_auditLogger.js');

app.use(express.json());


app.use('/api',checkUserAgent, auditLogger, userRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});