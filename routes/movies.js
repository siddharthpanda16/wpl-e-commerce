const express = require("express");

function getMoviesRouter() {
  const router = express.Router();

  // /* get all movies (admin) */
  // router.get("/movies", async (req, res) => {
  //   console.log(`GET /movies/${req.params.id} hit.`);
  //   try {
  //     Movie.find(function(err, movies) {
  //       if (err) return next(err);
  //       res.send(movies);
  //     });
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // });

  /* get single movie */
  router.post("/movies/:id", async (req, res) => {
    console.log("GET /movies/:id hit.");

    try {
      res.status(200).json({ success: true });
    } catch (e) {
      console.error(e.message);
      cognitoError(res);
    }
  });

  return router;
}

module.exports = { getMoviesRouter };
