const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    emaile: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlengh: 5
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
});

const user = mongoose.model("User", userSchema);
module.exports = { user };