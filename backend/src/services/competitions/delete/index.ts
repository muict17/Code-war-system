import db from "../../../db";
import { DeleteData } from "../../../interfaces/http/delete-data";

const deletedSql = ` DELETE FROM competitions WHERE competition_id = $1`;

export default async (competitionId: number): Promise<DeleteData> => {
  const connection = await db.connect();
  const deletedResult = await connection.query(deletedSql, [competitionId]);
  connection.release(true);

  const isDeleted = deletedResult.rowCount !== 0;
  if (isDeleted) {
    return {
      rowCount: deletedResult.rowCount
    };
  }

  throw new Error("competition id not found");
};
