import db from "../../../db";

const deleteSql = ` DELETE FROM competition_category WHERE category_id = $1`;

export default async (categoryId: number) => {
  const connection = await db.connect();
  const deletedResult = await connection.query(deleteSql, [categoryId]);

  const isDeleted = deletedResult.rowCount !== 0;
  if (isDeleted) {
    return {
      rowCount: deletedResult.rowCount
    };
  }

  throw new Error("category id not found");
};
