const db = require("../models");
const Post = db.post;

const createPost = async (req, res) => {
  try {
    const createPost = await Post.create({ ...req.body });
    res.status(201).send(createPost);
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const getPost = async (req, res) => {
  try {
    const findPost = await Post.findByPk(req.params.id);
    if (!findPost) return res.status(404).send({ message: "post not exists." });
    res.status(200).send(findPost);
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const getPosts = async (req, res) => {
  try {
    const findPost = await Post.findAll();
    if (!findPost) return res.status(404).send({ message: "post not exists." });
    res.status(200).send(findPost);
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postUpdate = await Post.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!postUpdate[0])
      return res.status(404).send({ message: "post not exists." });
    res.status(202).send({ data: "successfully updated!" });
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postDelete = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postDelete)
      return res.status(404).send({ message: "post not exists." });
    res.status(200).send("deleted!");
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
};
