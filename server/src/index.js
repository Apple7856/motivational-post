const express = require("express");
const dotenv = require("dotenv");
const ServerConfig = require("./config/environments/server.config");

const app = express();
dotenv.config();
const node_env = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("hello harry");
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  ServerConfig();
  console.log(`backend server is runing on port ${port}.`);
});
