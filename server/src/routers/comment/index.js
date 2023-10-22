const express = require("express");
const {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../../controllers/comment");
const router = express.Router();

router.post("/comment", createComment);
router.get("/comment/:postId", getComments);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;
