const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { getMoviesRouter } = require("./routes/movies");
const { getUsersRouter } = require("./routes/users");

// // Set up mongoose connection
// const dbURI = `mongodb+srv://${encodeURIComponent(
//   "daytonpe"
// )}:${encodeURIComponent(
//   process.env.PASSWORD
// )}@sandbox-l2gbc.mongodb.net/test?retryWrites=true`;
//
// console.log("dbURI", dbURI);
// const mongoDB = process.env.MONGODB_URI || dbURI;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// // db.on("error", console.log("Error connecting to mongoDB."));

app.use(bodyParser.json());

/* Attach our routers to the base endpoint */
const moviesRouter = getMoviesRouter();
const usersRouter = getUsersRouter();
app.use("/", moviesRouter);
app.use("/", usersRouter);

/* basic ping route */
app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "The dude abides." });
  } catch (e) {
    console.error(e.message);
    cognitoError(res);
  }
});

/* Set default route */
app.use((req, res) => {
  res.status(404).json({ error: "This is not a valid route." });
});

/* Fire up the server on port 1234 */
app.listen(1234, () => {
  console.log("Listening on port 1234!");
});
