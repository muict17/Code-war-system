import createRoleService from "../../services/user-roles/create";
import updateRoleByIdService from "../../services/user-roles/update";

test("update role by id ", async () => {
  const createdResult = await createRoleService("test");
  const updatedResult = await updateRoleByIdService(
    createdResult.roleId,
    "test2"
  );
  expect(createdResult.name).not.toEqual(updatedResult.name);
});
