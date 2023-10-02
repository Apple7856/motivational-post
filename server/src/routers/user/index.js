const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

router.post("/user", createUser);
router.get("/user/:id", getUser);
router.get("/user", getUsers);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
