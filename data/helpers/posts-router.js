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
// router.post("/", (req, res) => {
//   const newPost = req.body;
//   if (newPost) {
//     Posts.insert(newPost)
//       .then(post => {
//         res.status(201).json(post);
//       })
//       .catch(error => {
//         res.status(500).json({
//           error: "There was an error while saving the post to the database"
//         });
//       });
//   } else {
//     res.status(400).json({
//       errorMessage: "Please provide text for the post."
//     });
//   }
// });

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

module.exports = router;
