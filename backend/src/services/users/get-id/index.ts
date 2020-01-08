import db from "../../../db";
import { QueryResult } from "pg";
import { UserInfo } from "../../../interfaces/model/user-info";
import mapToCamelCase from "../../../utils/transform/to-camel";

const getUserByIdSql = `
  SELECT
    user_id,
    role_id,
    class_id,
    token_auth,
    student_id,
    username,
    password,
    is_verified,
    score,
    create_at,
    update_at
  FROM users
  WHERE user_id = $1
`;

export default async (userId: number): Promise<UserInfo> => {
  const connection = await db.connect();
  const result: QueryResult = await connection.query(getUserByIdSql, [userId]);
  connection.release(true);
  if (result.rows.length !== 0) {
    return mapToCamelCase(result.rows[0]);
  }
  throw new Error("user id not found");
};
