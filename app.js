require('dotenv').config();
const express = require('express');
const app  = express();

const port = process.env.port || 3000;


app.get('/', (req, res)=>{
    console.log('from console----> home route');
    return res.send('<h1>Home Route</h1>');
});


app.listen(port, ()=>{
    console.log(`app runnning on http://localhost:${port}`);
});
