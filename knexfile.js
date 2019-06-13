require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS
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
  }
};
