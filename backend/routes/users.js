const router = require('express').Router();
let User = require('../models/user.model');

router.router('/').get((req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(4000).json('Error' + err))
});

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const firstName = req.body.username;
    const lastName = req.body.username;
    const email = req.body.username;
    const address1 = req.body.username;
    const city = req.body.username;
    const country = req.body.username;
    const password = req.body.username;
    const dob = Date.parse(req.body.dob);

    const newUser =  new User({
        username,
        firstName,
        lastName,
        email,
        address1,
        city,
        country,
        password,
        dob
    })

    newUser.save()
        .then(() => res.json('User added! '))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;