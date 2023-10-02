const { Sequelize, DataTypes } = require("sequelize");
const { Router } = require("express");
const dbConfig = require("../db/postgresql.config.json").local;

function ServerConfig() {
  const configure = async () => {
    const sequelize = new Sequelize(
      dbConfig.database,
      dbConfig.username,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
      }
    );

    try {
      await sequelize.authenticate();
      console.log("db connected");
    } catch (error) {
      console.log(`db connection failed ${error}`);
    }
  };
  return configure;
}
