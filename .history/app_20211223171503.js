const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "assets")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "views", "index.html"));
});
app.listen(3000);
