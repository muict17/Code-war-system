import db from "../../../db";
import { DeleteData } from "../../../interfaces/http/delete-data";
const deleteSql = "DELETE FROM roles WHERE role_id = $1";

export default async (roleId: number): Promise<DeleteData> => {
  const connection = await db.connect();
  const deleteResult = await connection.query(deleteSql, [roleId]);
  const isSuccessDelete = deleteResult.rowCount > 0;
  return isSuccessDelete
    ? {
        httpCode: 200,
        message: "deleted"
      }
    : {
        httpCode: 404,
        message: "role id not found"
      };
};
