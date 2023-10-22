const express = require("express");
const { likePost, unlikePost } = require("../../controllers/like");
const router = express.Router();

router.post("/like", likePost);
router.delete("/like/:id", unlikePost);

module.exports = router;
