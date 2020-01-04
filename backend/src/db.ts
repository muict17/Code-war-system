import * as pg from "pg";
import * as named from "node-postgres-named";
require("dotenv").config();
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT)
});
named.patch(pool);
export default pool;
