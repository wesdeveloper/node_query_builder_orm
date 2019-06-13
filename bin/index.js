const ip = require("ip");

const api = require("../src/app");
const log = require("../src/configs/logger");

const PORT = process.env.PORT || 3001;
(async () => {
  log.info("Starting server...");

  const app = await api;
  app.listen(PORT, () =>
    log.info(
      `Server is running at port ${PORT}, see more about the application on: http://${ip.address()}:${PORT}/api`
    )
  );
})();
