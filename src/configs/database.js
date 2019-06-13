const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const database = require("knex")({
  client: "pg",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
  },
  migrations: {
    tableName: "migrations"
  },
  seeds: {
    directory: `${__dirname}/seeds/dev`
  },
  pool: {
    min: 1,
    max: 20
  }
});

module.exports = { database };
