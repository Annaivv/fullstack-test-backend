const express = require("express");

const ctrl = require("../../controllers/deals");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

module.exports = router;
