const login = require("./routes/login");
const signup = require("./routes/signup");
const auth = require("./routes/auth");
const matchMake = require("./routes/matchMake");
const retrieveMatches = require("./routes/retrieveMatches");
const newMatchResponse = require("./routes/newMatchResponse");
const retrieveQueue = require("./routes/retrieveQueue");
const deleteChampQueueObject = require("./routes/deleteChampQueueObject");
const { User } = require("./models/user");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./services/keys");

mongoose
  .connect(
    "mongodb://sifudiep:t3mppass@ds247223.mlab.com:47223/lol-matchups-users",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

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

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
