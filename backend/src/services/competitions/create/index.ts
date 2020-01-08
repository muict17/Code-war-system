import db from "../../../db";
import { CompetitionData } from "./interfaces";
import { CompetitionInfo } from "../../../interfaces/model/competitions-info";
import mapToCamelCase from "../../../utils/transform/to-camel";

const createdSql = `
  INSERT INTO competitions(
    category_id,
    name,
    description,
    start_date,
    end_date
  ) VALUES ( $1, $2, $3, $4, $5 )
  RETURNING *
`;
export default async (
  competitionData: CompetitionData
): Promise<CompetitionInfo> => {
  const { categoryId, name, description, startDate, endDate } = competitionData;
  const connection = await db.connect();
  const createdResult = await connection.query(createdSql, [
    categoryId,
    name,
    description,
    new Date(startDate),
    new Date(endDate)
  ]);
  return mapToCamelCase(createdResult.rows[0]);
};
