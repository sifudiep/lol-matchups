const login = require("./routes/login");
const signup = require("./routes/signup");
const auth = require("./routes/auth");
const matchMake = require("./routes/matchMake");
const retrieveMatches = require("./routes/retrieveMatches");
const newMatchResponse = require("./routes/newMatchResponse");
const retrieveQueue = require("./routes/retrieveQueue");
const deleteChampQueueObject = require("./routes/deleteChampQueueObject");
const retrieveReadyMatches = require("./routes/retrieveReadyMatches");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connects the server with mongoDB, hosted on mlab.
mongoose
  .connect(
    "mongodb://sifudiep:t3mppass@ds247223.mlab.com:47223/lol-matchups-users",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

// Allows user client(localhost:3000) to communicate with the api(localhost:2000).
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", login);
app.use("/api", signup);
app.use("/api", auth);
app.use("/api", matchMake);
app.use("/api", retrieveMatches);
app.use("/api", newMatchResponse);
app.use("/api", retrieveQueue);
app.use("/api", deleteChampQueueObject);
app.use("/api", retrieveReadyMatches);

// If a environment port variable exists, set the port to that, else set it to 2000.
const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
