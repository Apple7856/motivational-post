const db = require("../models");
const User = db.user;

const createUser = async (req, res) => {
  const createUser = await User.create({ ...req.body });
  res.send(createUser);
};

const getUser = async (req, res) => {
  const findUser = await User.findByPk(req.params.id);
  res.send(findUser);
};

const getUsers = async (req, res) => {
  const findUser = await User.findAll();
  res.send(findUser);
};

const updateUser = async (req, res) => {
  const userUpdate = await User.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send({ data: userUpdate });
};

const deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("deleted!");
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
