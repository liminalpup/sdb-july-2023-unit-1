const mongoose = require("mongoose");

//---------OBJECT BUILD OUT---------------
const animalSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    legNumber: {
        type: Number,
    },
    predator: {
        type: Boolean,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});


// ----------Model Module Export
module.exports = mongoose.model("Animal", animalSchema);
