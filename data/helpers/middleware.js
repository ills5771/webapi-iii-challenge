function nameUpperCase(req, res, next) {
  const name = req.body.name;

  if (!name) {
    res.status(403).send("Enter name");
  } else {
    req.body.name = name.toUpperCase();
  }
  next();
}

module.exports = nameUpperCase;
