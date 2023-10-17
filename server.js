const mongoose = require("mongoose");
const { Client, Pool } = require("pg");

const { DB_HOST } = process.env;

const app = require("./app");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "volpa",
  database: "postgres",
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
