const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");

const getAllDeals = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};
const getDealById = async (id) => {
  const books = await getAllDeals();
  const result = books.find((item) => item.id === id);
  return result || null;
};

module.exports = {
  getAllDeals,
  getDealById,
};
