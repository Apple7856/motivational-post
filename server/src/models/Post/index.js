module.exports = (sequelize, DataTypes, Model) => {
  class Post extends Model {}
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "posts",
      timestamps: false,
    }
  );
  return Post;
};
