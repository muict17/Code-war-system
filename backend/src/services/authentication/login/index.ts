import db from "../../../db";
import jwt from "../../../jwt";
import * as bcrypt from "bcrypt";
import { LoginData, Response } from "./interface";

const getUserSql = `
  SELECT
    user_id,
    token_auth,
    password
  FROM users
  WHERE username = $1
`;
export default async (loginInfo: LoginData): Promise<Response> => {
  const { username, password } = loginInfo;

  const connection = await db.connect();
  const userResult = await connection.query(getUserSql, [username]);

  const isUserFounded = userResult.rows.length !== 0;
  if (isUserFounded) {
    const userInfo = userResult.rows[0];
    const verifyPassword = await bcrypt.compare(password, userInfo.password);

    if (verifyPassword) {
      const jwtToken = await jwt.sign({
        userId: userInfo.user_id,
        tokenAuth: userInfo.token_auth
      });
      return {
        jwt: jwtToken
      };
    }

    throw new Error("password incorrect");
  }

  throw new Error("username not found");
};
