const format = require("pg-format");
import db from "../../db";
import {
  baseSelectSql,
  baseInsertSql,
  baseDeleteSql,
  baseUpdateSql
} from "./sql";
