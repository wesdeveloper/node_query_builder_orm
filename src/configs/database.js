const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];

// eslint-disable-next-line import/order
const knex = require("knex")(config);

module.exports = knex;
