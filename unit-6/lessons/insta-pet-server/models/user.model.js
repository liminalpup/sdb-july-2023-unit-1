/* 
1. Import Mongoose
2. Create a variable that will store the schema (a schema defines what a collection looks like)
3. Create the object of what the data will look like
4. Export the model to be used in other files
*/

//Step 1
const mongoose = require("mongoose");
// Step 2
const UserSchema = new mongoose.Schema(
// Step 3
    {
    firstname:{
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});
// Step 4              Name of Collection, Schema
module.exports = mongoose.model("User", UserSchema);

