const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    Name: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: false
    }
    
});


module.exports = mongoose.model("User",userSchema);
