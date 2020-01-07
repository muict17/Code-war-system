import db from "../db";

const clearDatabase = async () => {
  const connection = await db.connect();
  const listTables = await connection.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE'"
  );
  const deleteAll = listTables.rows.map(
    async table => await connection.query(`DELETE FROM ${table}`)
  );
  const result = await Promise.all(deleteAll);
  console.log(result);
};

afterAll(() => {
  // clearDatabase();
});
