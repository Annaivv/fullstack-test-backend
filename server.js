const { Client } = require("pg");
require("dotenv").config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
console.log(DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD);

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
