const router = require('express').Router();
let User = require('../models/user.model');

// API call to display all current users in the database
// currently doesn't work for some reaosn
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

 // API call to add a user to the database
router.route('/add').post((req, res) => {

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    /*console.log({name});
    console.log({username});
    console.log({password});*/

    // creates a model instance with the supplied credentials
    const newUser = new User({name, username, password});
    //console.log({newUser});

    // saves that instance to the mongoDB database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;