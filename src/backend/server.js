const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
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
app.use("/api", authRoutes);
app.use("/api", usersRoutes);

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
