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
db.sequelize.sync({ force: false });

module.exports = db;
