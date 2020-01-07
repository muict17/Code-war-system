import db from "../../../db";
import { QueryResult } from "pg";
import { RoleInfo } from "../../../interfaces/model/role-info";
import mapToCamelCase from "../../../utils/transform/to-camel";

const getRoleSql = `
SELECT
  role_id,
  name,
  create_at,
  update_at
FROM roles
LIMIT $1
OFFSET $2`;

export default async (limit: number, offset: number): Promise<RoleInfo[]> => {
  const connection = await db.connect();
  const listRoles: QueryResult<RoleInfo> = await connection.query(getRoleSql, [
    limit,
    offset
  ]);
  return listRoles.rows.map((role: RoleInfo) => mapToCamelCase(role));
};
