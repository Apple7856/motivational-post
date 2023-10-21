module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "likes",
    {
      postId: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Like;
};
