// import db from "../../db";
import { UserInfo } from "../../interfaces/model/jwt-info";
// const verifyRoleSql = `
// SELECT
//   roles.name
// FROM users
// INNER JOIN roles ON users.role_id = roles.role_id
// WHERE users.user_id = $1`;

export default (userInfo: UserInfo, roles: string[]): boolean => {
  const isPermitted: boolean = roles.includes(userInfo.role);
  return isPermitted;
};
