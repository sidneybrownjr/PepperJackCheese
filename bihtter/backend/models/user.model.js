const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Defines what details can be stored for a User
const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model('User', userSchema);

// exports the schema model for use in other files
module.exports = User;