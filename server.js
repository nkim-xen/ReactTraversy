const express = require("express");
const mongoose = require("mongoose");

const app = express();

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

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
app.get("/", (req, res) => res.send("Hello1"));

app.use("api/users", users);
app.use("api/posts", posts);
app.use("api/profile", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
