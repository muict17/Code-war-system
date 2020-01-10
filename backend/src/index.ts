import server from "./app";
import logger from "./logger";
require("dotenv").config();
const port = Number(process.env.SERVER_PORT) || 3000;
server()
  .listen(port, "0.0.0.0")
  .then(() => {
    logger.info(`listening ${port}`);
  });
