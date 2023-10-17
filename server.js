//const mongoose = require("mongoose");
const { Client } = require("pg");

const { DB_HOST, PASSWORD } = process.env;

// const app = require("./app");

const client = new Client({
  host: DB_HOST,
  user: "admin",
  port: 5432,
  password: PASSWORD,
  database: "deals_kulu",
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
