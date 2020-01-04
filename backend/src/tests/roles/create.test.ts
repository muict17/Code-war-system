const createRoleService = require("../../services/user-roles/create");

describe("create user role", () => {
  test("list", async () => {
    console.log(createRoleService);
    const result = await createRoleService.default("test");
    console.log(result);
    expect(result.name).toEqual("test");
  });
});
