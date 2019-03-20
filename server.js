const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const postsRouter = require("./data/helpers/posts-router");

const usersRouter = require("./data/helpers/users-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/posts", postsRouter);

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`Welcome to Users API`);
});

module.exports = server;
