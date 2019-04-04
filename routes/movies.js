const express = require("express");
const Movie = require("../models/movie");

function getMoviesRouter() {
  const router = express.Router();

  /* get all movies by level
   * Can query on level as well with ?level=3 appended to end of url*/
  router.get("/movies", async (req, res) => {
    console.log(`GET /movies?level=${req.query.level} hit.`);
    try {
      const movies = Movie.find({ level: req.query.level }).catch(e => {
        throw Error("Problem finding movies.");
      });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* get single movie */
  router.get("/movies/:id", async (req, res) => {
    console.log(`Get /movies/${req.params.id} hit.`);
    try {
      const movie = await Movie.findById(req.params.id).catch(e => {
        throw Error("Problem finding movie by ID.");
      });
      res.status(200).json({ movie, message: "Success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* create new movie */
  router.post("/movies", async (req, res) => {
    console.log("POST /movies hit.");
    try {
      if (!req.body.title) throw new Error("title is required.");

      /* Ensure username is not already taken. */
      const nameTaken = await Movie.findOne({ title: req.body.title });

      if (nameTaken) throw new Error("This title already exists");

      const movie = new Movie(req.body);

      await movie.save().catch(e => {
        throw Error("Problem saving new movie.");
      });

      res.status(200).json({ id: movie._id, message: "success" });
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /* update a movie */
  router.put("/movies/:id", async (req, res) => {
    console.log(`PUT /movies/${req.params.id} hit.`);

    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body
      ).catch(e => {
        throw Error("Problem finding or updating movie by ID.");
      });
      res.status(200).json({ id: movie._id, message: "Success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  /* delete a movie */
  router.delete("/movies/:id", async (req, res) => {
    console.log(`DELETE /movies/${req.params.id} hit.`);

    try {
      await Movie.findByIdAndDelete(req.params.id).catch(e => {
        throw Error("Problem finding or deleting movie by ID.");
      });
      res.status(200).json({ message: "Success" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  return router;
}

module.exports = { getMoviesRouter };
