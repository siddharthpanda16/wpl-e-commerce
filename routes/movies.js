const express = require("express");
const Movie = require("../models/movie");

function getMoviesRouter() {
  const router = express.Router();

  /* get all movies by level */
  // router.get("/movies/:level", async (req, res) => {
  //   console.log(`GET /movies/${req.params.id} hit.`);
  //   try {
  //     Movie.findByLevel(function(err, movies) {
  //       if (err) return next(err);
  //       res.send(movies);
  //     });
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // });

  /* get single movie */
  router.get("/movies/:id", async (req, res) => {
    console.log(`Get /movies/${req.params.id} hit.`);
    try {
      Movie.findById(req.params.id, function(err, user) {
        if (err) throw new Error("Problem locating movie");
        res.status(200).json({ user });
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* create new movie */
  router.post("/movies", async (req, res) => {
    console.log("POST /movies hit.");

    try {
      const movie = new Movie(req.body);

      movie.save(function(err) {
        if (err) throw new Error("problem creating new user.");
        res.status(200).json({ id: movie._id, message: "success" });
      });
    } catch (e) {
      console.error(e.message);
    }
  });

  return router;
}

module.exports = { getMoviesRouter };
