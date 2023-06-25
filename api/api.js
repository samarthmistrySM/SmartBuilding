const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const Light = require('./models/lightschema');
const Ac = require('./models/acschema');
const Security = require('./models/securityschema');

const app = express();
const port = 4000;


app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://samarth:samarth@smartbuilding.zdqgd00.mongodb.net/myDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully Connected to MongoDb")
    })
    .catch((err) => {
        console.log("Error connecting to mongoDb: ", err)
    })

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.send('The Api is working.....');
})

app.get('/api/light', (req, res) => {
    Light.find({})
        .then((lights) => {
            res.send(lights);
        })
        .catch((error) => {
            res.send(error);
        })
})

app.get('/api/ac', (req, res) => {
    Ac.find({})
        .then((acs) => {
            res.send(acs);
        })
        .catch((error) => {
            res.send(error);
        })
})

app.get('/api/security', (req, res) => {
    Security.find({})
        .then((security) => {
            res.send(security);
        })
        .catch((error) => {
            res.send(error);
        })
})

app.post('/api/light', (req, res) => {
    const { name, location, state, color, brightness, mode } = req.body;

    try {
        const newLight = new Light({
            name,
            location,
            state,
            color,
            brightness,
            mode
        })

        console.log(newLight);
        newLight.save();
    }
    catch (error) {
        console.log(error)
    }
})

app.put('/api/light', async(req,res)=>{
    const { name, location, state, color, brightness, mode } = req.body;

    try{
        const filter = {name: name};
        const update = {location: location, state: state, color: color, brightness: brightness, mode: mode}

        const result = await Light.findOneAndUpdate(filter,update);
        console.log(result);
    } catch(error){
        console.log(error)
    }
})

app.post('/api/ac', (req, res) => {
    console.log(req.body);
    const { name, location, state, temperature, mode, speed } = req.body;

    try {
        const newAc = new Ac({
            name,
            location,
            state,
            temperature,
            mode,
            speed
        })
        console.log(newAc);
        newAc.save();
    } catch (error) {
        console.log(error)
    }
})

app.put('/api/ac', async(req,res)=>{
    const { name, location, state, temperature, mode, speed } = req.body;
    console.log(req.body)
    try{
        const filter = {name: name};
        const update = {location: location, state: state, temperature: temperature, mode: mode, speed: speed}

        const result = await Ac.findOneAndUpdate(filter,update);
        console.log(result);
    } catch(error){
        console.log(error)
    }
})

app.post('/api/security', (req, res) => {
    console.log(req.body);
    const { name, location, camera, mode, alarm } = req.body;

    try {
        const newSecurity = new Security({
            name,
            location,
            camera,
            mode,
            alarm
        })
        console.log(newSecurity);
        newSecurity.save();
    } catch (error) {
        console.log(error)
    }
})

app.put('/api/security', async(req,res)=>{
    const { name, location, camera, mode, alarm } = req.body;
    console.log(req.body)
    try{
        const filter = {name: name};
        const update = {location: location, camera: camera, mode: mode, alarm: alarm}

        const result = await Security.findOneAndUpdate(filter,update);
        console.log(result);
    } catch(error){
        console.log(error)
    }
})

app.delete('/api/light/:id', async (req, res) => {
    try {
        const lightID = req.params.id;
        console.log("light: ", lightID)
        const deleteLight = await Light.findByIdAndDelete(lightID);
        console.log(deleteLight);
    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/ac/:id', async (req, res) => {
    try {
        const acID = req.params.id;
        console.log("ac: ", acID)
        const deleteAc = await Ac.findByIdAndDelete(acID);
        console.log(deleteAc);
    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/security/:id', async (req, res) => {
    try {
        const securityID = req.params.id;
        console.log("security: ", securityID)
        const deleteSecurity = await Security.findByIdAndDelete(securityID);
        console.log(deleteSecurity);
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Api is running on http://localhost:${port}`); 
})