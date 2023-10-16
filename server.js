const mongoose = require("mongoose");

const app = require("./app");
const DB_HOST =
  "mongodb+srv://Annaiv:qwerty654@cluster0.cneocyv.mongodb.net/deals_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(4000, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
