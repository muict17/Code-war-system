import db from "../../../db";
import { CompetitionData } from "./interfaces";
import { CompetitionInfo } from "../../../interfaces/model/competitions-info";

import mapToCamelCase from "../../../utils/transform/to-camel";

const updatedSql = `
  UPDATE competitions
  SET
    name = $1,
    description = $2,
    start_date = $3,
    end_date = $4,
    update_at = $6
  WHERE competition_id = $5
  RETURNING *
`;
export default async (
  competitionId: number,
  competitionData: CompetitionData
): Promise<CompetitionInfo> => {
  const { name, description, startDate, endDate } = competitionData;
  const connection = await db.connect();
  const updatedResult = await connection.query(updatedSql, [
    name,
    description,
    startDate,
    endDate,
    competitionId,
    new Date()
  ]);
  connection.release(true);
  const isUpdated = updatedResult.rowCount !== 0;
  if (isUpdated) {
    return mapToCamelCase(updatedResult.rows[0]);
  }

  throw new Error("competition id not found");
};
