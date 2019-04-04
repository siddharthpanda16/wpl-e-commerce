const express = require("express");
const User = require("../models/user");
const Movie = require("../models/movie");

function getUsersRouter() {
  const router = express.Router();

  /* login */
  router.post("/login", async (req, res) => {
    console.log("POST /login hit.");
    try {
      /* Grabn un/pw from body */
      const username = req.body.username;
      const password = req.body.password;

      /* Ensure everything exists */
      if (!username || !password)
        throw new Error("username and password must be provided.");

      User.findOne({ username }, function(err, user) {
        if (err) {
          res.status(400).json({ error: "problem finding and updating user." });
        } else {
          const match = password === user.password; //TODO encrypt this
          res.status(200).json({ success: match });
        }
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* get single user
   * NOTE: I can easily switch this to username if you prefer*/
  router.get("/users/:id", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    User.findById(req.params.id, function(err, user) {
      if (err) {
        res
          .status(400)
          .json({ error: "Problem finding the usr by the given parameter." });
      } else {
        res.status(200).json({ user });
      }
    });
  });

  /* get all users (admin) */
  router.get("/users", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    User.find(function(err, users) {
      if (err) {
        res.status(400).json({ error: "problem populating all users" });
      } else {
        res.status(200).json({ users });
      }
    });
  });

  /* create new user */
  router.post("/users", async (req, res) => {
    console.log("POST /users hit.");

    try {
      /* Grab the required portions of the new user. */
      const {
        displayName,
        username,
        password,
        billing: { ccNum, ccCVV, ccExp }
      } = req.body;

      /* Set the cart to blank initially */
      req.body.cart = [];

      /* Ensure all the required fields are present. */
      if (
        !displayName ||
        !username ||
        !password ||
        !ccNum ||
        !ccCVV ||
        !ccExp
      ) {
        throw new Error("all required fields are not provided.");
      }

      /* Ensure username is not already taken. */
      const nameTaken = await User.findOne({ username }, function(err, user) {
        if (err) {
          res
            .status(400)
            .json({ error: "Problem ensuring no duplicate username." });
        } else {
          return user !== null;
        }
      });

      if (nameTaken) {
        res.status(400).json({ error: "This username is already taken." });
      } else {
        const user = new User(req.body);

        /* Make sure the body is saved */
        user.save(function(err) {
          if (err) {
            res.status(400).json({ error: "Problem saving new user." });
          } else {
            res.status(200).json({ id: user._id, message: "success" });
          }
        });
      }
    } catch (e) {
      console.error(e.message);
      res.json({ error: e.message });
    }
  });

  /* update a user */
  router.put("/users/:id", async (req, res) => {
    console.log(`PUT /users/${req.params.id} hit.`);

    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
      err,
      user
    ) {
      if (err) {
        res.status(400).json({ error: "problem finding and updating user." });
      } else {
        res.status(200).json({ id: user._id, success: true });
      }
    });
  });

  /* delete a user */
  router.delete("/users/:id", async (req, res) => {
    console.log("PUT /users hit.");
    User.findByIdAndDelete(req.params.id, { $set: req.body }, function(
      err,
      user
    ) {
      if (err) {
        res.status(400).json({ error: "Problem finding and deleting user." });
      } else {
        res.status(200).json({ success: true });
      }
    });
  });

  /* Add a movie id to a users cart */
  router.post("/users/:userId/movie/:movieId", async (req, res) => {
    console.log("POST /users/:userId/movie/:movieId hit.");
    try {
      /* Locate the user via their id */
      User.findById(req.params.userId, function(err, user) {
        if (err) throw new Error("Error finding user.");

        /* ensure it's actually a movie */
        Movie.findById(req.params.movieId, function(err, movies) {
          if (err) throw new Error("Movie doesn't exist.");
        });

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

  /* post login
   * returns
   * - id, username, level */

  return router;
}

module.exports = { getUsersRouter };
