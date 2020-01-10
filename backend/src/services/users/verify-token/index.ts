import db from "../../../db";

const verifyEmailSql =
  "UPDATE users SET is_verified = true WHERE verify_token = $1";

export default async (verifyToken: string) => {
  const connection = await db.connect();
  const result = await connection.query(verifyEmailSql, [verifyToken]);
  connection.release(true);
  const isUpdated = result.rowCount !== 0;
  if (isUpdated) {
    return true;
  }

  throw new Error("token not found");
};
