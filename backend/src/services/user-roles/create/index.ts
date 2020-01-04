import { QueryResult } from "pg";
import db from "../../../db";
import { RoleInfo } from "../../../interfaces/model/role-info";

const createRoleSql = "INSERT INTO roles(name) VALUES ($1) RETURNING *";
export default async (roleName: string): Promise<RoleInfo> => {
  const connection = await db.connect();
  const roleResult: QueryResult<RoleInfo> = await connection.query(
    createRoleSql,
    [roleName]
  );
  return roleResult.rows[0];
};
