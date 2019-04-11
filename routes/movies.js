const express = require("express");
const Movie = require("../models/movie");

/* Function to count the most prevalent members of a list
 * Citation: https://stackoverflow.com/questions/22010520/sort-by-number-of-occurrencecount-in-javascript-array
 *
 * Use for creating a recommendation based on a concatenated list of actors and genres. */
function uniqueCountPreserve(inputArray) {
  //Sorts the input array by the number of time
  //each element appears (largest to smallest)

  /* Add a couple base cases */
  if (inputArray.length === 0) return [];
  if (inputArray.length === 1) return inputArray;

  //Count the number of times each item
  //in the array occurs and save the counts to an object
  var arrayItemCounts = {};
  for (var i in inputArray) {
    if (!arrayItemCounts.hasOwnProperty(inputArray[i])) {
      arrayItemCounts[inputArray[i]] = 1;
    } else {
      arrayItemCounts[inputArray[i]] += 1;
    }
  }

  //Sort the keys by value (smallest to largest)
  //please see Markus R's answer at: http://stackoverflow.com/a/16794116/4898004
  var keysByCount = Object.keys(arrayItemCounts).sort(function(a, b) {
    return arrayItemCounts[a] - arrayItemCounts[b];
  });

  //Reverse the Array and Return
  return keysByCount.reverse();
}

/* util function to return avg of an array */
function getAvg(arr) {
  return (
    arr.reduce(function(p, c) {
      return p + c;
    }) / arr.length
  );
}

/* Quick checker to make sure variables are arrays */
Array.prototype.isArray = true;

function getMoviesRouter() {
  const router = express.Router();

  /* get all movies by level
   * Can query on level as well with ?level=3 appended to end of url*/
  router.get("/movies", async (req, res) => {
    let { sortBy, order, limit, level } = req.query;
    if (limit) {
      limit = parseInt(limit);
    } else {
      limit = 200;
    }

    try {
      // let sortAndOrder = `{ '${req.query.sortBy ? req.query.sortBy : Title}' : '${req.query.order ? req.query.order : 1}' }`;
      // console.log ( sortAndOrder );
      const movies = await Movie.find()
        .limit(limit)
        .catch(e => {
          throw Error("Problem finding movies.");
        });
      res.status(200).json(movies);
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /**
   * get top rated 10 movies
   */
  router.get("/movies/top", async (req, res) => {
    console.log(`GET /movies?level=${req.query.level} hit.`);
    try {
      let sortByImdbRating = { "imdb.rating": "desc" };
      const movies = await Movie.find()
        .sort(sortByImdbRating)
        .limit(10)
        .catch(e => {
          throw Error("Problem finding movies.");
        });
      res.status(200).json(movies);
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  /**
   * get recent 20 movies
   */
  router.get("/movies/recent", async (req, res) => {
    console.log(`GET /movies?level=${req.query.level} hit.`);
    try {
      let sortByYear = { year: "desc" };
      const movies = await Movie.find()
        .sort(sortByYear)
        .limit(20)
        .catch(e => {
          throw Error("Problem finding movies.");
        });
      res.status(200).json(movies);
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
      res.status(200).json(movie); // { movie, message: "Success" }
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

  /**
   * get a recommendation for 20 movies based on:
   * cast overlap, genre overlap, high rating.
   *
   * I'm making this a POST request so we can use the body, rather
   * than the url string.
   */
  router.post("/movies/recommend", async (req, res) => {
    console.log(`POST /movies/recommend hit.`);
    try {
      let sortByYear = { year: "desc" };

      /* get the information from the body */
      let { genres, cast, ratings } = req.body;

      if (!genres || !cast || !ratings)
        throw new Error("genres, cast, and ratings are required");

      /* Make sure everything passed in in the body is an array */
      if (!genres.isArray || !cast.isArray || !ratings.isArray)
        throw new Error("genres, cast, and ratings must be an array");

      /* Initialize arrays if they are empty for some reason */
      if (genres.length === 0) genres = ["Action"];
      if (cast.length === 0) cast = ["Kevin Bacon"]; // cuz why not?
      if (ratings.length === 0) ratings = [6];

      /* Filter down to the most important genre/cast member */
      const genre = uniqueCountPreserve(genres)[0] || undefined;
      console.log("genre", genre);

      /* Filter down to the most important cast member */
      const actor = uniqueCountPreserve(cast)[0] || undefined;
      console.log("actor", actor);

      /* get the average rating. */
      rating = getAvg(ratings);
      console.log("rating", rating);

      /* Simple recommendation engine:
       * Based on the actors, genres, ratings passed in,
       * we find movies that match either 2+ of the following constraints:
       * - includes actor that is featured the most in the passed in list
       * - includes genre type that is featured most in the passed in list
       * - is higher than the avg rating of the passed in list. */
      const movies = await Movie.find({
        $or: [
          {
            genres: genre,
            actors: actor,
            "imdb.rating": { $gt: rating }
          },
          {
            genres: genre,
            "imdb.rating": { $gt: rating }
          },
          {
            "imdb.rating": { $gt: rating },
            actors: actor
          },
          {
            genres: genre,
            actors: actor
          }
        ]
      })
        .sort({ year: "desc" })
        .limit(20)
        .catch(e => {
          throw Error("Problem finding movies.");
        });
      res.status(200).json(movies);
    } catch (e) {
      console.error(e.message);
      res.status(400).json({ error: e.message });
    }
  });

  return router;
}

module.exports = { getMoviesRouter };
