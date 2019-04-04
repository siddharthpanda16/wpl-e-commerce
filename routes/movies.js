const express = require("express");
const Movie = require("../models/movie");

function getMoviesRouter() {
  const router = express.Router();

  /* get all movies by level */
  router.get("/movies", async (req, res) => {
    console.log(`GET /movies?level=${req.query.level} hit.`);
    try {
      Movie.find({ level: req.query.level }, function(err, movies) {
        if (err) throw new Error("Problem locating movies");
        res.status(200).json({ movies });
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* get single movie */
  router.get("/movies/:id", async (req, res) => {
    console.log(`Get /movies/${req.params.id} hit.`);
    Movie.findById(req.params.id, function(err, movie) {
      if (err) {
        res.status(400).json({ error: "problem finding this movie" });
      } else {
        res.status(200).json({ movie });
      }
    });
  });

  /* create new movie */
  router.post("/movies", async (req, res) => {
    console.log("POST /movies hit.");
    try {
      const movie = new Movie(req.body);

      movie.save(function(err) {
        if (err) throw new Error("problem creating new movie.");
        res.status(200).json({ id: movie._id, message: "success" });
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* update a movie */
  router.put("/movies/:id", async (req, res) => {
    console.log(`PUT /movies/${req.params.id} hit.`);

    try {
      Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
        err,
        movie
      ) {
        if (err) throw new Error("Problem updating the movie.");
        res.status(200).json({ movie, success: true });
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* delete a movie */
  router.delete("/movies/:id", async (req, res) => {
    console.log("PUT /movies hit.");

    try {
      Movie.findByIdAndDelete(req.params.id, { $set: req.body }, function(
        err,
        movie
      ) {
        if (err) return next(err);
        res.status(200).json({ success: true });
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  return router;
}

module.exports = { getMoviesRouter };
