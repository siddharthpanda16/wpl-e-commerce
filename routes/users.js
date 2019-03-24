const express = require("express");
var User = require("../models/user");

function getUsersRouter() {
  const router = express.Router();

  /* create new user */
  router.post("/users", async (req, res) => {
    console.log("POST /users hit.");

    try {
      const user = new User({
        displayName: req.body.displayName,
        username: req.body.username,
        password: req.body.password
      });

      user.save(function(err) {
        if (err) {
          return next(err);
        }
        res.send("User Created successfully");
      });

      res.status(200).json({ displayName });
    } catch (e) {
      console.error(e.message);
    }
  });

  /* get single user */
  router.get("/users/:id", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    try {
      User.findById(req.params.id, function(err, user) {
        if (err) return next(err);
        res.send(user);
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  return router;
}

module.exports = { getUsersRouter };
