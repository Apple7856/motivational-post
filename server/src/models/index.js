const { Sequelize, DataTypes, Model } = require("sequelize");
const dbConfig = require("../config/postgresql.config.json").local;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("db connected");
  } catch (error) {
    console.log(`db connection failed ${error}`);
  }
}

connectDB();
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./User")(sequelize, DataTypes);
db.post = require("./Post")(sequelize, DataTypes, Model);
db.like = require("./Like")(sequelize, DataTypes, Model);
db.comment = require("./Comment")(sequelize, DataTypes, Model);

// associations
db.user.hasMany(db.post, { foreignKey: "userId" });
db.post.belongsTo(db.user, { foreignKey: "userId" });

db.post.hasMany(db.like, { foreignKey: "postId" });
db.like.belongsTo(db.post, { foreignKey: "postId" });

db.post.hasMany(db.comment, { foreignKey: "postId" });
db.comment.belongsTo(db.post, { foreignKey: "postId" });

db.user.hasMany(db.like, { foreignKey: "userId" });
db.like.belongsTo(db.user, { foreignKey: "userId" });

db.user.hasMany(db.comment, { foreignKey: "userId" });
db.comment.belongsTo(db.user, { foreignKey: "userId" });

db.sequelize.sync({ force: true });

module.exports = db;
