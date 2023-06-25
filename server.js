const express = require('express');

const app = express();
const port = 3000;

const web = `${__dirname}/web`
const images = `${__dirname}/images`
const resources = `${__dirname}/resources`

app.use(express.static(web));
app.use(express.static(images));
app.use(express.static(resources));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',(req,res)=>{
    res.sendFile(`${web}/welcome.html`);
});

app.get('/add',(req,res)=>{
    res.sendFile(`${web}/add.html`)
})

app.get('/delete',(req,res)=>{
    res.sendFile(`${web}/delete.html`)
})

app.get('/light',(req,res)=>{
    res.sendFile(`${web}/lighting.html`)
})

app.get('/ac',(req,res)=>{
    res.sendFile(`${web}/ac.html`)
})

app.get('/security',(req,res)=>{
    res.sendFile(`${web}/security.html`)
})

app.listen(port,()=>{
    console.log(`Server Started On http://localhost:${port}`);
})