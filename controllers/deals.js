const deals = require("../models");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await deals.getAllDeals();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await deals.getDealById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
