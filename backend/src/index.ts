import server from "./app";
require("dotenv").config({ path: "../.env-sample" });
const port = Number(process.env.SERVER_PORT) || 3000;
server().listen(port, "0.0.0.0");
