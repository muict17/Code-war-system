import db from "../../../db";
import mapToCamelCase from "../../../utils/transform/to-camel";
import { CompetitionCategoryInfo } from "../../../interfaces/model/competition-category-info";
import { QueryString } from "./interfaces";
const getAllCategorySql = `
  SELECT
    category_id,
    name,
    description,
    create_at,
    update_at
  FROM competition_category
  LIMIT $1
  OFFSET $2
`;

const getCategoryByName = `
  SELECT
    category_id,
    name,
    description,
    create_at,
    update_at
  FROM competition_category
  WHERE name LIKE $1
`;

export default async (
  query: QueryString
): Promise<CompetitionCategoryInfo[]> => {
  const connection = await db.connect();

  if (query.name) {
    const result = await connection.query(getCategoryByName, [
      `%${query.name}%`
    ]);
    connection.release(true);
    return result.rows.map(mapToCamelCase);
  }

  const result = await connection.query(getAllCategorySql, [
    query.limit,
    query.offset
  ]);
  connection.release(true);
  return result.rows.map(mapToCamelCase);
};
