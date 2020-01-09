const format = require("pg-format");
import { baseInsertSql } from "../sql";

export default (data: [string, string, number]): any => {
  const sql = `${baseInsertSql} VALUES (%L) RETURNING *`;
  return format(sql, data);
};
