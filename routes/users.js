const express = require("express");
var User = require("../models/user");

function getUsersRouter() {
  const router = express.Router();

  /* get single movie */
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

  return router;
}

module.exports = { getUsersRouter };
