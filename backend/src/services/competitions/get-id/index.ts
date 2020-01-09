import db from "../../../db";
import { CompetitionInfo } from "../../../interfaces/model/competitions-info";
import transformToCompetitionInfo from "./transform";

const getCompetitionByIdSql = `
  SELECT
    competition_category.category_id AS competition_category_category_id,
    competition_category.name AS competition_category_name,
    competition_category.description AS competition_category_description,
    competition_category.create_at AS competition_category_create_at,
    competition_category.update_at AS competition_category_update_at,

    competitions.competition_id AS competitions_competition_id,
    competitions.category_id AS competitions_category_id,
    competitions.name AS competitions_name,
    competitions.description AS competitions_description,
    competitions.start_date AS competitions_start_date,
    competitions.end_date AS competitions_end_date,
    competitions.create_at AS competitions_create_at,
    competitions.update_at AS competitions_update_at
    FROM competitions
    INNER JOIN competition_category
      ON competition_category.category_id = competitions.category_id
    WHERE competitions.competition_id = $1
`;

export default async (competitionId: number): Promise<CompetitionInfo> => {
  const connection = await db.connect();
  const result = await connection.query(getCompetitionByIdSql, [competitionId]);
  connection.release(true);

  const isFounded = result.rows.length !== 0;
  if (isFounded) {
    return transformToCompetitionInfo(result.rows[0]);
  }
  throw new Error("competition id not found");
};
