const mongoose = require('mongoose');
var passwordHash = require('password-hash');

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

userSchema.methods.generateHash = function(password){
    var hashedPassword = passwordHash.generate(password);
    //console.log(hashedPassword); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97
    return hashedPassword
};

userSchema.methods.validPassword = function(password){
    return passwordHash.verify(password, this.password);
};

const User = mongoose.model('User', userSchema);

// exports the schema model for use in other files
module.exports = User;