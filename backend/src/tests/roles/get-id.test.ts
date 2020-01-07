import getRoleByIdService from "../../services/user-roles/get-id";
import createRoleService from "../../services/user-roles/create";

test("get role by id", async () => {
  const createdResult = await createRoleService("test");
  const result = await getRoleByIdService(createdResult.roleId);
  expect(result.name).toEqual("test");
});
