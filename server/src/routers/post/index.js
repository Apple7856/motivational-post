const express = require("express");
const router = express.Router();
const {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../../controllers/post");

router.post("/post", createPost);
router.get("/post/:id", getPost);
router.get("/post", getPosts);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
