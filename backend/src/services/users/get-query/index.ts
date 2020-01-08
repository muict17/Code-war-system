import db from "../../../db";
import { QueryString } from "./interfaces";
import { UserInfo } from "../../../interfaces/model/user-info";
import mapToCamelCase from "../../../utils/transform/to-camel";

const getAllUserSql = `
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
  LIMIT $1
  OFFSET $2
`;

const getUserByStudentIdSql = `
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
  WHERE student_id = $1
  LIMIT $2
  OFFSET $3
`;
export default async (query: QueryString): Promise<UserInfo[]> => {
  const connection = await db.connect();

  if (query.studentId) {
    const result = await connection.query(getUserByStudentIdSql, [
      query.studentId,
      query.limit,
      query.offset
    ]);
    connection.release(true);
    return result.rows.map(mapToCamelCase);
  }

  const result = await connection.query(getAllUserSql, [
    query.limit,
    query.offset
  ]);
  connection.release(true);
  return result.rows.map(mapToCamelCase);
};
