import roleCreateRoute from "./roles/create";
import userCreateRoute from "./users/create";
import userGetByIdRoute from "./users/get-id";
import userUpdateRoute from "./users/update";
import userDeleteRoute from "./users/delete";

export default [
  userDeleteRoute,
  roleCreateRoute,
  userCreateRoute,
  userGetByIdRoute,
  userUpdateRoute
];
