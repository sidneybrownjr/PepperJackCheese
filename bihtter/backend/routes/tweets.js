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
    const like = req.body.like;
    const date = Date.parse(req.body.date);

    const newTweet = new Tweet({
        username,
        description,
        like,
        date,
    });

    newTweet.save()
    .then(() => res.json('Tweet posted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/like").post((req,res,next) => {
    const tweet_id = req.body.tweet_id;
    const userID = req.body.user_id; 

    Tweet.findByIdAndUpdate({
        _id: tweet_id , 
    },{ 
        $addToSet: { like: userID }
      }, null, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server Error'
            });
          }else{
            return res.send({
                success: true,
                message: 'good'
            });
          }
        
        })
    })
router.route("/unlike").post((req,res,next) => {
        const tweet_id = req.body.tweet_id;
        const userID = req.body.user_id; 
    
        Tweet.findByIdAndUpdate({
            _id: tweet_id , 
        },{ 
            $pull: { like: userID }
          }, null, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
              }else{
                return res.send({
                    success: true,
                    message: 'good'
                });
              }
            
            })
        })
    
module.exports = router;
