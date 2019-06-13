require("dotenv").config();

const cors = require("cors");
const assert = require("assert");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const { logger, database } = require("./configs");
const { responseMiddleware } = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(responseMiddleware);

app.get("/api", (req, res) =>
  res.parseReturn({
    status: 200,
    data: { message: "Welcome to node_query_builder_orm" }
  })
);

// catch 404
app.use((req, res) =>
  res.parseReturn({
    status: 404,
    data: { message: "Not Found" }
  })
);

// error handlers
app.use((err, req, res) => {
  // set locals, only providing error in development
  const error = app.get("env") === "development" ? err : {};
  logger.error(err);
  const status = err.status || 500;

  // respond to client
  return res.parseReturn({ status, data: error });
});

const main = async () => {
  try {
    // Start the database connection
    const {
      rows: [{ result }]
    } = await database.raw("select 1+1 as result");
    assert.equal(result, 2);
    logger.info("Database sucessfull connection!");

    // return the app instance
    return app;
  } catch (e) {
    logger.error(`Database connection failed: ${e.message}`);
    process.exit(0);
  }
};

module.exports = main();
