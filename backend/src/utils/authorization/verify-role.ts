import db from "../../db";

const verifyRoleSql = `
SELECT
  roles.name
FROM users
INNER JOIN roles ON users.role_id = roles.role_id
WHERE users.user_id = $1`;

export default async (userId: string, roles: string[]): Promise<boolean> => {
  const userRole = await db.query(verifyRoleSql, [userId]);
  const isPermitted: boolean = roles.includes(userRole.rows[0].name);
  return isPermitted;
};
