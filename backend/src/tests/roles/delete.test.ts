import deleteRoleService from "../../services/user-roles/delete";
import createRoleService from "../../services/user-roles/create";

test("delete", async () => {
  const createdResult = await createRoleService("test");
  const result = await deleteRoleService(createdResult.roleId);
  expect(result.rowCount).toEqual(1);
});
