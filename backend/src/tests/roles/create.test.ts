const createRoleService = require("@services/user-roles/create");

describe("create user role", () => {
  test("list", async () => {
    const result = await createRoleService("test");
    expect(result.name).toEqual("test");
  });
});
