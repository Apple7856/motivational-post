const db = require("../models");
const Like = db.like;

const likePost = async (req, res) => {
  await Like.create({ ...req.body });
  res.status(201).send({ message: "like post." });
};

const unlikePost = async (req, res) => {
  await Like.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send({ message: "unlike post." });
};

module.exports = {
  likePost,
  unlikePost,
};
