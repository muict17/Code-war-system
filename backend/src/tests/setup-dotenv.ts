import dotenv = require("dotenv");
import path = require("path");

const envSamplePath = path.join(__dirname, "../..", ".env-sample");

const dotEnvFile = dotenv.config();
const isHaveDotEnvFile = dotEnvFile.error === undefined;

if (!isHaveDotEnvFile) {
  dotenv.config({ path: envSamplePath });
}
