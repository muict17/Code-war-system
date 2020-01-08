import db from "../../../db";
import { QueryResult } from "pg";
import { CompetitionCategoryInfo } from "../../../interfaces/model/competition-category-info";
import { CategoryData } from "./interfaces";
import mapToCamelCase from "../../../utils/transform/to-camel";

const createdSql = ` INSERT INTO competition_category( name, description ) VALUES($1, $2) RETURNING *`;

export default async (
  categoryData: CategoryData
): Promise<CompetitionCategoryInfo> => {
  const { name, description } = categoryData;
  const connection = await db.connect();
  const createdResult: QueryResult = await connection.query(createdSql, [
    name,
    description
  ]);
  return mapToCamelCase(createdResult.rows[0]);
};
