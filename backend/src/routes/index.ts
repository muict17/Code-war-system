import roleCreateRoute from "./roles/create";
import userCreateRoute from "./users/create";
import userGetByIdRoute from "./users/get-id";
import userUpdateRoute from "./users/update";
import userDeleteRoute from "./users/delete";
import userGetByQueryRoute from "./users/get-query";
import userVerifyRoute from "./users/verify-user";
import loginRoute from "./authentication/login";

export default [
  loginRoute,
  userVerifyRoute,
  userGetByQueryRoute,
  userDeleteRoute,
  roleCreateRoute,
  userCreateRoute,
  userGetByIdRoute,
  userUpdateRoute
];
