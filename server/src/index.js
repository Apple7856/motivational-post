const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const node_env = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("hello harry");
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`backend server is runing on port ${port}.`);
});
