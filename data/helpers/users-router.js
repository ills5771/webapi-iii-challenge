const express = require("express");

const Users = require("./userDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error retrieving posts" });
  }
});

module.exports = router;
