const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./models");
const userRouter = require("./routers/user");
const postRouter = require("./routers/post");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/data/api/v1", userRouter);
app.use("/data/api/v1", postRouter);

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`backend server is runing on port ${port}.`);
});
