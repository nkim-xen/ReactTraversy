const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users.js");
const posts = require("./routes/api/posts.js");
const profile = require("./routes/api/profile.js");
const validateRegisterInput = require("./validation/register.js");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongoose connection success."))
  .catch(err => {
    console.log(err);
    console.log("Failed to connect");
  });

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Hello1"));

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
