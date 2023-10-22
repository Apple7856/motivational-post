const db = require("../models");
const Like = db.like;
const User = db.user;

const likePost = async (req, res) => {
  await Like.create({ ...req.body });
  res.status(201).send({ message: "like post." });
};

const getPostLike = async (req, res) => {
  const { count, rows } = await Like.findAndCountAll({
    where: {
      postId: req.params.postId,
    },
    attributes: [],
    include: {
      model: User,
      attributes: ["id", "fullName"],
    },
  });
  res.status(201).send({ likeCount: count, data: rows });
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
  getPostLike,
};
