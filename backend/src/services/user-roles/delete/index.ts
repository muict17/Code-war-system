import db from "../../../db";
import { DeleteData } from "../../../interfaces/http/delete-data";
const deleteSql = "DELETE FROM roles WHERE role_id = $1";

export default async (roleId: number): Promise<DeleteData> => {
  const connection = await db.connect();
  const deletedResult = await connection.query(deleteSql, [roleId]);
  connection.release(true);
  const isDeleted = deletedResult.rowCount !== 0;
  if (isDeleted) {
    return {
      rowCount: deletedResult.rowCount
    };
  }

  throw new Error("role id not found");
};
