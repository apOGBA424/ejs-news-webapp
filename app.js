// imports
require('dotenv').config();
const express = require('express');
const app  = express();

const {getNews_fromAPI} = require('./controller/data');


// variables
const port = process.env.port || 3000;


// template view engine
app.use(express.static('public'));
app.set('view enjine', 'ejs');

// news images
let imgList = [
    {id : '13','img_url':'https://images.pexels.com/photos/7090872/pexels-photo-7090872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id : '14','img_url':'https://images.pexels.com/photos/7869108/pexels-photo-7869108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id : '22','img_url':'https://images.unsplash.com/photo-1586985564259-6211deb4c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'},
    {id : '27','img_url':'https://images.unsplash.com/photo-1594377157609-5c996118ac7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id : '29','img_url':'https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id : '38','img_url':'https://images.unsplash.com/photo-1598948339458-99387ad5b26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id : '41','img_url':'https://images.pexels.com/photos/262470/pexels-photo-262470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id : '48','img_url':'https://images.pexels.com/photos/2867895/pexels-photo-2867895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id : '50','img_url':'https://images.unsplash.com/photo-1593693846836-86921cc9fd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80'},
    {id : '60','img_url':'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80'}
]

// route data object
let route_data;


// routes
app.get('/', (req, res)=>{
    route_data = {page_name : 'Home'};
    console.log(`from console----> ${route_data['page_name']} route`);
    return res.render('index.ejs', {route_data});
});

app.get('/details', (req, res)=>{
    route_data = {page_name : 'Details'};
    console.log(`from console----> ${route_data['page_name']} route`);
    return res.render('detailspage.ejs', {route_data});
});


app.use((req, res)=>{
    return res.render('404.ejs');
})

app.listen(port, ()=>{
    // console.log(`app runnning on http://localhost:${port}/testnews`);
    console.log(`app runnning on http://localhost:${port}`);
});
