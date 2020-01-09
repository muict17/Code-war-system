import getByQueryService from "../../services/questions/get-query";

test("list all question", async () => {
  const result = await getByQueryService({ limit: 1, offset: 0 });
  expect(result.length).toEqual(1);
});

test("list all question by name", async () => {
  const result = await getByQueryService({ limit: 2, offset: 0, name: "%Te%" });
  expect(result.length).toBeGreaterThanOrEqual(0);
});
