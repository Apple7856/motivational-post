const db = require("../models");
const Comment = db.comment;

const createComment = async (req, res) => {
  const createComment = await Comment.create({ ...req.body });
  res.send(createComment);
};

const getComments = async (req, res) => {
  const findComment = await Comment.findAll();
  res.send(findComment);
};

const updateComment = async (req, res) => {
  const CommentUpdate = await Comment.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send({ data: CommentUpdate });
};

const deleteComment = async (req, res) => {
  await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("deleted!");
};

module.exports = {
  createComment,
  getComments,
  updateComment,
  deleteComment,
};
