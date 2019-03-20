const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "error retrieving posts" });
  }
});

module.exports = router;
