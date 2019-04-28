const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { getMoviesRouter } = require("./routes/movies");
const { getUsersRouter } = require("./routes/users");

// Set up mongoose connection
const dbURI = `mongodb://pat:password1@ds051334.mlab.com:51334/movie-app`;

mongoose.connect(dbURI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
} );

/* Attach our routers to the base endpoint */
const moviesRouter = getMoviesRouter();
const usersRouter = getUsersRouter();
app.use("/", moviesRouter);
app.use("/", usersRouter);

/* basic ping route */
app.get("/", (req, res) => {
  try {
    console.log("Base route hit.");
    res.status(200).json({ message: "The dude abides." });
  } catch (e) {
    console.error(e.message);
  }
});

app.put("/", (req, res) => {
  try {
    console.log("Test put hit");
    res.status(200).json({ message: "PUT tested" });
  } catch (e) {
    console.error(e.message);
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
