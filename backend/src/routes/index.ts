import roleCreateRoute from "./roles/create";
import userCreateRoute from "./users/create";
import userGetByIdRoute from "./users/get-id";
import userUpdateRoute from "./users/update";
import userDeleteRoute from "./users/delete";
import userGetByQueryRoute from "./users/get-query";
import userVerifyRoute from "./users/verify-user";
import loginRoute from "./authentication/login";
import categoryCreateRoute from "./categories/create";
import categoryDeleteRoute from "./categories/delete";
import categoryUpdateRoute from "./categories/update";
import categoryGetByIdRoute from "./categories/get-id";
import categoryGetByQueryRoute from "./categories/get-query";
import competitionCreateRoute from "./competitions/create";
import competitionGetyByIdRoute from "./competitions/get-id";

export default [
  competitionGetyByIdRoute,
  competitionCreateRoute,
  categoryGetByQueryRoute,
  categoryGetByIdRoute,
  categoryUpdateRoute,
  categoryDeleteRoute,
  categoryCreateRoute,
  loginRoute,
  userVerifyRoute,
  userGetByQueryRoute,
  userDeleteRoute,
  roleCreateRoute,
  userCreateRoute,
  userGetByIdRoute,
  userUpdateRoute
];
