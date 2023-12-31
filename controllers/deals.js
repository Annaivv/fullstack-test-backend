const Deal = require("../models/deal");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Deal.find();
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
