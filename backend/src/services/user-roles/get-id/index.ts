import db from "../../../db";
import { RoleInfo } from "../../../interfaces/model/role-info";
import { QueryResult } from "pg";
import mapToCamelCase from "../../../utils/transform/to-camel";
const getRoleByIdSql = `
SELECT
  role_id,
  name,
  create_at,
  update_at
FROM roles
WHERE role_id = $1`;

export default async (roleId: number): Promise<RoleInfo> => {
  const connection = await db.connect();
  const result: QueryResult<RoleInfo[]> = await connection.query(
    getRoleByIdSql,
    [roleId]
  );
  connection.release(true);

  const isFound = result.rows.length !== 0;

  if (isFound) {
    return mapToCamelCase(result.rows[0]);
  }

  throw new Error("role id not found");
};
