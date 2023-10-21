module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comments",
    {
      commentMessage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Comment;
};
