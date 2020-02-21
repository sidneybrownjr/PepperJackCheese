const router = require('express').Router();
let Tweet = require('../models/bihtter.model');

router.route('/').get((req, res) => {
    Tweet.find()
    .then(tweets => res.json(tweets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/post').post((req, res) => {
    const username = req.body.username; 
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newTweet = new Tweet({
        username,
        description,
        date
    });

    newTweet.save()
    .then(() => res.json('Tweet posted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;