var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  Title: { type: String, required: true },
  poster: { type: String },
  actors: [{ type: String }],
  awards: {
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String }
  },
  countries: [{ type: String }],
  director: { type: String },
  genres: [{ type: String }],
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: String }
  },
  metacritic: { type: Number },
  plot: { type: String },
  rated: { type: String },
  runtime: { type: Number },
  tomato: {
    rating: { type: Number },
    userReviews: { type: Number },
    userMeter: { type: Number },
    image: { type: String },
    meter: { type: Number },
    reviews: { type: Number },
    userRating: { type: Number },
    fresh: { type: Number },
    consensus: { type: String }
  },
  type: { type: String },
  writers: [{ type: String }],
  year: { type: Number },
  level: { type: Number }
});

// Export the model
module.exports = mongoose.model("Movie", MovieSchema);
