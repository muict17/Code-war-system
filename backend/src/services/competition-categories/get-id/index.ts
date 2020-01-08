import db from "../../../db";
import mapToCamelCase from "../../../utils/transform/to-camel";
import { CompetitionCategoryInfo } from "../../../interfaces/model/competition-category-info";

const getCategoryByIdSql = `
  SELECT
    category_id,
    name,
    description,
    create_at,
    update_at
  FROM competition_category
  WHERE category_id = $1
`;
export default async (categoryId: number): Promise<CompetitionCategoryInfo> => {
  const connection = await db.connect();
  const result = await connection.query(getCategoryByIdSql, [categoryId]);

  const isFounded = result.rows.length !== 0;
  if (isFounded) {
    return mapToCamelCase(result.rows[0]);
  }

  throw new Error("category id not found");
};
