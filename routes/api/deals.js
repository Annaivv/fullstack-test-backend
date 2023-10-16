const express = require("express");

const deals = require("../../models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await deals.getAllDeals();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deals.getDealById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
