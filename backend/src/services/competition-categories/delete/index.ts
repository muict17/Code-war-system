import db from "../../../db";

const deleteSql = ` DELETE FROM competition_category WHERE category_id = $1`;

export default async (categoryId: number) => {
  const connection = await db.connect();
  const deletedResult = await connection.query(deleteSql, [categoryId]);
  return {
    rowCount: deletedResult.rowCount
  };
};
