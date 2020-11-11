const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/build"));

  app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
}

module.exports = app;
