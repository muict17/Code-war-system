import db from "../../../db";
import mapToCamelCase from "../../../utils/transform/to-camel";
import { CompetitionCategoryInfo } from "../../../interfaces/model/competition-category-info";
import { CategoryData } from "./interfaces";

const updatedSql = `
  UPDATE competition_category
  SET
    name = $1,
    description = $2,
    update_at = $3
  WHERE category_id = $4
  RETURNING *
`;
export default async (
  categoryId: number,
  categoryData: CategoryData
): Promise<CompetitionCategoryInfo> => {
  const { name, description } = categoryData;
  const connection = await db.connect();
  const updatedResult = await connection.query(updatedSql, [
    name,
    description,
    new Date(),
    categoryId
  ]);

  const isUpdated = updatedResult.rowCount !== 0;
  if (isUpdated) {
    return mapToCamelCase(updatedResult.rows[0]);
  }

  throw new Error("category id not found");
};
