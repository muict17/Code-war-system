import db from "../../../db";
import { QueryResult } from "pg";
import { RoleInfo } from "../../../interfaces/model/role-info";
import mapToCamelCase from "../../../utils/transform/to-camel";

const updateRoleSql = `
  UPDATE roles
  SET
    name = $1,
    update_at = $2
  WHERE role_id = $3
  RETURNING *
`;
export default async (roleId: number, name: string): Promise<RoleInfo> => {
  const connection = await db.connect();
  const updateResult: QueryResult<RoleInfo[]> = await connection.query(
    updateRoleSql,
    [name, new Date(), roleId]
  );
  connection.release(true);

  return mapToCamelCase(updateResult.rows[0]);
};
