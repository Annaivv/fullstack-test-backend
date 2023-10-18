const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
