const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.get(req.query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "error retrieving posts" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The post information could not be retrieved."
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = await Posts.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding post"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Posts.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The post is deleted" });
    } else {
      res.status(404).json({ message: "The post could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error removing the post"
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.update(req.params.id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "The post could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating the post"
    });
  }
});

module.exports = router;
