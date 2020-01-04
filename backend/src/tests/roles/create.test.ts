import createRoleService from "../../services/user-roles/create";

test("create user role", async () => {
  const result = await createRoleService("test");
  expect(result.name).toEqual("test");
});
