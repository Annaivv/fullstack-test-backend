const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dealsRouter = require("./routes/api/deals");

app.use("/api/deals", dealsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(500).json({ message });
});
module.exports = app;

//mongodb+srv://Annaiv:<password>@cluster0.cneocyv.mongodb.net/?retryWrites=true&w=majority
