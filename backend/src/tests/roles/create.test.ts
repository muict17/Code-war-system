import createRoleService from "../../services/user-roles/create";

test("create user role", async () => {
  console.log(process.env);
  const result = await createRoleService("test");
  expect(result.name).toEqual("test");
});
