const express = require("express");
const User = require("../models/user");
const Movie = require("../models/movie");
const bcrypt = require("bcrypt");

function getUsersRouter() {
  const router = express.Router();

  /* login */
  router.post("/login", async (req, res) => {
    console.log("POST /login hit.");
    try {
      /* Grab un/pw from body */
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;

      /* Ensure everything exists */
      if (!username || !password)
        throw new Error("username and password must be provided.");

      const user = await User.findOne({ username }).catch(e => {
        throw Error("Problem finding user by username");
      });

      const match = await bcrypt.compare(password, user.password).catch(e => {
        throw Error("Problem comparing the passwords");
      });

      res.status(200).json({ match, user });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* get single user
   * NOTE: I can easily switch this to username if you prefer*/
  router.get("/users/:id", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    try {
      const user = await User.findById(req.params.id).catch(e => {
        throw Error("Problem finding user by ID.");
      });
      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* get all users (admin) */
  router.get("/users", async (req, res) => {
    console.log(`GET /users/${req.params.id} hit.`);
    try {
      const users = await User.find().catch(e => {
        throw Error("Problem populating all users.");
      });
      res.status(200).json({ users });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
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
      const nameTaken = await User.findOne({ username });

      if (nameTaken) throw new Error("This username is already taken.");
      const user = new User(req.body);

      /* Make sure the user is saved */
      await user.save().catch(e => {
        throw Error("Problem saving new user.");
      });

      res.status(200).json({ id: user._id, message: "success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* update a user */
  router.put("/users/:id", async (req, res) => {
    console.log(`PUT /users/${req.params.id} hit.`);
    try {
      console.log(req.params.id, req.body);
      const user = await User.findByIdAndUpdate(req.params.id, req.body).catch(
        e => {
          throw Error("Problem finding or updating user by ID.");
        }
      );
      res.status(200).json(user); //{ id: user._id, message: "Success" }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* delete a user */
  router.delete("/users/:id", async (req, res) => {
    console.log("DELETE /users hit.");
    try {
      await User.findByIdAndDelete(req.params.id).catch(e => {
        throw Error("Problem finding or deleting user by ID.");
      });
      res.status(200).json({ message: "Success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* Add a movie id to a users cart */
  router.post("/users/:userId/movie/:movieId", async (req, res) => {
    console.log("POST /users/:userId/movie/:movieId hit.");
    try {
      /* Ensure the user exists */
      const user = await User.findById(req.params.userId).catch(e => {
        throw Error("Problem finding user by ID.");
      });

      /* ensure it's actually a movie */
      await Movie.findById(req.params.movieId).catch(e => {
        throw Error("Movie doesn't exist");
      });

      /* ensure movie isn't already in the cart. */
      if (user.cart.includes(req.params.movieId)) {
        throw Error("Movie already in cart.");
      }

      /* Add the movie to the users cart */
      user.cart.push(req.params.movieId);

      /* save the new information */
      await user.save();

      res.status(200).json({ cart: user.cart, message: "Success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* post login
   * returns
   * - id, username, level */

  return router;
}

module.exports = { getUsersRouter };
