const express = require("express");
const cors = require("cors");

const dealsRouter = require("./routes/api/deals");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/deals", dealsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = app;
