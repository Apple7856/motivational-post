const db = require("../models");
const Like = db.like;

const createLike = async (req, res) => {
  const createLike = await Like.create({ ...req.body });
  res.send(createLike);
};

const deleteLike = async (req, res) => {
  await Like.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("deleted!");
};

module.exports = {
  createLike,
  deleteLike,
};
