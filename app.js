// imports
require('dotenv').config();
const express = require('express');
const app  = express();

// variables
const port = process.env.port || 3000;


// template view engine
app.use(express.static('public'));
app.set('view enjine', 'ejs');


// routes
// app.get('/test', (req, res)=>{
//     const stats = [{mode: 'test'},{mode: 'production'}];
//     console.log('test route running!');
//     res.render('test.ejs', {'modeStatus': stats});
// });
// app.get('/test2', (req, res)=>{
//     const stats = [{mode: 'test'},{mode: 'production'}];
//     console.log('test route running!');
//     res.render('test2.ejs', {'modeStatus': stats});
// });

app.get('/', (req, res)=>{
    console.log('from console----> home route');
    return res.render('index.ejs');
});
app.get('/details', (req, res)=>{
    console.log('from console----> details page route');
    return res.render('details-page.ejs');
});


app.listen(port, ()=>{
    console.log(`app runnning on http://localhost:${port}`);
});
