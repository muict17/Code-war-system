import getByQueryService from "../../services/users/get-query";

test("list all users with pagination ", async () => {
  const result = await getByQueryService({ limit: 10, offset: 0 });
  expect(result.length).toBeGreaterThan(0);
});

test("list all user with studentId", async () => {
  const result = await getByQueryService({
    limit: 10,
    offset: 0,
    studentId: "50"
  });
  expect(result.length).toBeGreaterThan(0);
});
