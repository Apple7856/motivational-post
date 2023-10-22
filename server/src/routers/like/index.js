const express = require("express");
const { likePost, unlikePost, getPostLike } = require("../../controllers/like");
const router = express.Router();

router.post("/like", likePost);
router.get("/like/:postId", getPostLike);
router.delete("/like/:id", unlikePost);

module.exports = router;
