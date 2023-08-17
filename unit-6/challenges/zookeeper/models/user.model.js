//---IMPORT DEPENDENCIES---------
const mongoose = require("mongoose");

//----CREATE USERSCHEMA OBJECT----------
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//---EXPORT UserSchema AS A MODEL-----------
module.exports = mongoose.model("User", UserSchema);