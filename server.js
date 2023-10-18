const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const port = 4000;

const db = require("./queries");

app.use(logger(formatsLogger));
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/api/deals", db.getDeals);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(500).json({ message });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
