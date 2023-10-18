const Pool = require("pg").Pool;
const { ctrlWrapper } = require("./helpers/index");

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: 5432,
});

const getDeals = (request, response) => {
  pool.query("SELECT * FROM deals", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getDeals,
};
