const db = require("../models");
const Comment = db.comment;
const User = db.user;

const createComment = async (req, res) => {
  try {
    const createComment = await Comment.create({ ...req.body });
    res.status(201).send(createComment);
  } catch (error) {
    res.status(409).send({ errors: error.errors[0].message });
  }
};

const getComments = async (req, res) => {
  try {
    const { count, rows } = await Comment.findAndCountAll({
      where: {
        postId: req.params.postId,
      },
      attributes: ["id", "commentMessage"],
      include: {
        model: User,
        attributes: ["id", "fullName"],
      },
    });
    res.status(200).send({ commentCount: count, data: rows });
  } catch (error) {
    res.status(409).send({ errors: error });
  }
};

const updateComment = async (req, res) => {
  try {
    await Comment.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(202).send({ data: "successfully updated!" });
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const deleteComment = async (req, res) => {
  res.send("deleted!");
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("deleted!");
  } catch (error) {
    res.status(401).send({ errors: error });
  }
};

module.exports = {
  createComment,
  getComments,
  updateComment,
  deleteComment,
};
