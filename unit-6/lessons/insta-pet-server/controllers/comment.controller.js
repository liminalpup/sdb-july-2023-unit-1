const router = require("express").Router()
const validateSession = require("../middleware/validate-session");
const Comment = require("../models/comment.model");

/* 
Endpoint: /view-all
req type: GET
*/

router.get("/view-all", validateSession, async (req, res) => {
  try {
    const comments = await Comment.find()
    res.json({
      message: "viewing all comments",
      comments: comments
    });
  } catch {
    res.status(500).json({
      message: error.message,
      });
   }
});

router.post("/add/:petPostId", validateSession, async (req, res) => {
  try {
    const { comment } = req.body;

    const submittedComment = new Comment({
      comment: comment,
      commentDate: Date().toLocaleString({
        dateStyle: "medium"
      }),
      ownerId: req.user._id,
      petPostId: req.params.petPostId
    });

    let newComment = await submittedComment.save();
    res.json({
      message: "comment successful",
      comment: newComment
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.delete("/delete/:id", validateSession, async (req, res) => {
  try {
    // console.log(req.params.id)
    const submittedComment = await Comment.deleteOne({
      _id: req.params.id,
      ownerId: req.user._id
    });
    // console.log(submittedComment)

    res.json({
      message: "comment deleted"
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});







//! ---export
module.exports = router;