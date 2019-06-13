const ip = require("ip");

const app = require("../src/app");
const logger = require("../src/configs/logger");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  logger.info(
    `Server is running at port ${PORT}, see more about the application on: http://${ip.address()}:${PORT}/api/docs`
  )
);
