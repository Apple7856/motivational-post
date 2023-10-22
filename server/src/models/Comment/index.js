module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comments",
    {
      commentMessage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );
  return Comment;
};
