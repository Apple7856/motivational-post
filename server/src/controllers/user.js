const db = require("../models");
const User = db.user;

const createUser = async (req, res) => {
  try {
    const createUser = await User.create({ ...req.body });
    res.status(201).send(createUser);
  } catch (error) {
    res.status(409).send({ errors: error.errors[0].message });
  }
};

const getUser = async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    if (!findUser) return res.status(404).send({ message: "user not exists." });
    res.status(200).send(findUser);
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const getUsers = async (req, res) => {
  try {
    const findUser = await User.findAll();
    if (!findUser) return res.status(404).send({ message: "user not exists." });
    res.status(200).send(findUser);
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userUpdate = await User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!userUpdate[0])
      return res.status(404).send({ message: "user not exists." });
    res.status(202).send({ data: "successfully updated!" });
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userDelete)
      return res.status(404).send({ message: "user not exists." });
    res.status(200).send("deleted!");
  } catch (error) {
    res.status(401).send({ errors: error.errors[0].message });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
