require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
