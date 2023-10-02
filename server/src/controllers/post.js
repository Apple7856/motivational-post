const db = require("../models");
const Post = db.post;

const createPost = async (req, res) => {
  const createPost = await Post.create({ ...req.body });
  res.send(createPost);
};

const getPost = async (req, res) => {
  const findPost = await Post.findByPk(req.params.id);
  res.send(findPost);
};

const getPosts = async (req, res) => {
  const findPost = await Post.findAll();
  res.send(findPost);
};

const updatePost = async (req, res) => {
  const postUpdate = await Post.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send({ data: postUpdate });
};

const deletePost = async (req, res) => {
  await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("deleted!");
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
};
