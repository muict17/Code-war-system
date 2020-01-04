import deleteRoleService from "../../services/user-roles/delete";

test("delete", async () => {
  const result = await deleteRoleService(13);
  expect(result.httpCode).toEqual(200);
});
