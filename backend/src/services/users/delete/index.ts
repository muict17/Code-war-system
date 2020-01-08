import db from "../../../db";
import { DeleteData } from "../../../interfaces/http/delete-data";

const deleteUserSql = `
  DELETE FROM users
  WHERE user_id = $1
`;

export default async (userId: number): Promise<DeleteData> => {
  const connection = await db.connect();
  const deletedResult = await connection.query(deleteUserSql, [userId]);
  return {
    rowCount: deletedResult.rowCount
  };
};
