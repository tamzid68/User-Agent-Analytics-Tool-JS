const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/rou_user.js');
const {checkUserAgent} = require('./middLeware/mid_user.js');

app.use(express.json());


app.use('/api',checkUserAgent, userRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});