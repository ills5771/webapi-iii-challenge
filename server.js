const express = require("express");
const helmet = require("helmet");

const postsRouter = require("./data/helpers/posts-router");

const usersRouter = require("./data/helpers/users-router");

const server = express();

function team(req, res, next) {
  req.team = "Web XVII";
  next();
}

server.use(express.json());
server.use(helmet());
server.use(team);

server.use("/api/posts", postsRouter);

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`Welcome to Users API`);
});

module.exports = server;
