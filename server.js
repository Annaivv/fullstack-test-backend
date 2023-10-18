// const mongoose = require("mongoose");
const { Client } = require("pg");
const cors = require("cors");
const app = require("./app");
const port = 4000;
require("dotenv").config();
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// const { DB_HOST } = process.env;

// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(4000, () => console.log("Server is running"));
//   })
//   .catch((err) => {
//     console.log(err.message);
//     process.exit(1);
//   });

// const { Client } = require("pg");
// const cors = require("cors");
// const express = require("express");
// const app = express();

// const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const client = new Client({
  host: DB_HOST,
  user: DB_USERNAME,
  port: 5432,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.connect();

client.query("Select * from deals", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
