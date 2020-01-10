import db from "../../../db";
import * as bcrypt from "bcrypt";
import { QueryResult } from "pg";
import { UserInfo } from "../../../interfaces/model/user-info";
import { UserData } from "./interfaces";

import mapToCamelCase from "../../../utils/transform/to-camel";
import tokenAuthGenerator from "../../../utils/generator/code-pattern";
const createdUserSql = `
  INSERT INTO users(
    role_id,
    token_auth,
    student_id,
    username,
    password,
    verify_token)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *`;

const checkUsernameSql = `
  SELECT
    user_id
  FROM users
  WHERE username = $1 OR student_id = $2
  LIMIT 1
  `;
export default async (user: UserData): Promise<UserInfo> => {
  const { roleId, username, password, studentId } = user;
  const connection = await db.connect();
  const checkUsername: QueryResult = await connection.query(checkUsernameSql, [
    username,
    studentId
  ]);
  const isUserExist = checkUsername.rows.length !== 0;
  if (!isUserExist) {
    const passwordSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, passwordSalt);
    const tokenAuth = tokenAuthGenerator("user_xxxxxxxxxxxx");
    const verifyEmailToken = tokenAuthGenerator("verify_xxxxxxxxxxxxxxxx");
    const userResult: QueryResult = await connection.query(createdUserSql, [
      roleId,
      tokenAuth,
      studentId,
      username,
      hashPassword,
      verifyEmailToken
    ]);
    connection.release(true);
    return mapToCamelCase(userResult.rows[0]);
  }
  throw new Error("conflict username");
};
