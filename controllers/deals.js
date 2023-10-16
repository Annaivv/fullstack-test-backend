const Deal = require("../models/deal");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Deal.find();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Deal.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
