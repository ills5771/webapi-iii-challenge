const express = require("express");

const Users = require("./userDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error retrieving users" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The user information could not be retrieved."
    });
  }
});

module.exports = router;
