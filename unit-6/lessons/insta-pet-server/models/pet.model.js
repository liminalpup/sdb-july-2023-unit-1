const mongoose = require("mongoose");

// title, description, imageURL
const PetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    ownerId: {
        type: mongoose.Types.ObjectId, 
        ref: "User",
    }
});

module.exports = mongoose.model("Pet", PetSchema);