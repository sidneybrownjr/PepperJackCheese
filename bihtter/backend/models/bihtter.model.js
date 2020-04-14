const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    like: {
        type: [String],
        required: true,
    },
    date: { 
        type: Date, 
        required: true
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
