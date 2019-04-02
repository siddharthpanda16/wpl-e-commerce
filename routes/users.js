const express = require("express");
var User = require("../models/user");

function getUsersRouter() {
  const router = express.Router();

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

  /* get all users (admin) */
  router.get("/users", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    try {
      User.find(function(err, users) {
        if (err) return next(err);
        res.send(users);
      });
    } catch (e) {
      console.error(e.message);
    }
  });

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

  /* update a user */
  router.put("/users/:id", async (req, res) => {
    console.log("PUT /users hit.");

    try {
      User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
        err,
        user
      ) {
        if (err) return next(err);
        res.status(200).json({ success: true });
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  /* delete a user */
  router.delete("/users/:id", async (req, res) => {
    console.log("PUT /users hit.");

    try {
      User.findByIdAndDelete(req.params.id, { $set: req.body }, function(
        err,
        user
      ) {
        if (err) return next(err);
        res.status(200).json({ success: true });
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  /* Add a movie id to a users cart */
  router.post("/users/:userId/movie/:movieId", async (req, res) => {
    console.log("POST /users/:userId/movie/:movieId hit.");
    try {
      /* Locate the user via their id */
      User.findById(req.params.userId, function(err, user) {
        if (err) throw new Error("Error finding user.");

        /* ensure it's actually a movie */

        /* Check the users plan to make sure they have space in their cart */

        /* Add the movie to the users cart */
        user.cart.push(req.params.movieId);

        /* save the new information */
        user.save(function(err) {
          if (err) throw new Error("Error adding movie to cart.");
          res.status(200).json({ message: "Success" });
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  return router;
}

module.exports = { getUsersRouter };
