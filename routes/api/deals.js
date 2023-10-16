const express = require("express");

const ctrl = require("../../controllers/deals");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

module.exports = router;
