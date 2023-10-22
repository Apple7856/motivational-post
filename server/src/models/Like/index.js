module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "likes",
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return Like;
};
