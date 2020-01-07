import getRoleByQueryService from "../../services/user-roles/get-query";

test("list roles", async () => {
  const result = await getRoleByQueryService(10, 0);
  expect(result.length).toBeGreaterThan(0);
});
