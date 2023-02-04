let express = require('express');
const { mongo } = require('mongoose');
let app = express();
let mongoose = require('./database/database');
let user = require('./models/User');

let User = mongoose.model('User', user);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({});
});

app.post('/user', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    if (user.name == '' || user.email == '' || user.password == ''){
        return res.sendStatus(400);
    }

    try{
        let user = await User.findOne({'email': req.body.email});
        if (user != undefined){
            res.json({error: 'E-mail already registered'});
            return res.sendStatus(400);
        }

        let newUser = new User(user);
    
        await newUser.save();
        res.json({email: req.body.email});
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
    
});

module.exports = app;