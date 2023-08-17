const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
  
  comment: {
    type: String,
  },
  commentDate: {
    type: Date,
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  petPostId: {
    type: mongoose.Types.ObjectId,
    ref: "Pet"
  }

})

module.exports = mongoose.model("Comment", commentSchema);