import db from "../../../db";
import { UserData } from "./interfaces";
import { UserInfo } from "../../../interfaces/model/user-info";
import * as bcrypt from "bcrypt";
import mapToCamelCase from "../../../utils/transform/to-camel";

const updateUserInfo = `
  UPDATE users
  SET
    username = $1,
    password = $2,
    update_at = $5
  WHERE user_id = $3 OR token_auth = $4
  RETURNING *
`;
export default async (userData: UserData): Promise<UserInfo> => {
  const { userId, tokenAuth, username, password } = userData;
  const connection = await db.connect();
  const passwordSalt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, passwordSalt);
  const updatedResult = await connection.query(updateUserInfo, [
    username,
    hashPassword,
    userId,
    tokenAuth,
    new Date()
  ]);

  if (updatedResult.rowCount !== 0) {
    return mapToCamelCase(updatedResult.rows[0]);
  }

  throw new Error("user id not found");
};
