import getByQueryService from "../../services/questions/get-query";

test("list all question", async () => {
  const result = await getByQueryService({ limit: 2, offset: 0 });
  expect(result.length).toBeGreaterThanOrEqual(0);
});

test("list all question by name", async () => {
  const result = await getByQueryService({ limit: 2, offset: 0, name: "%Te%" });
  expect(result.length).toBeGreaterThanOrEqual(0);
});

test("list all question by name without join", async () => {
  const result = await getByQueryService({
    limit: 2,
    offset: 0,
    name: "%Te%",
    isJoin: false
  });
  expect(result.length).toBeGreaterThanOrEqual(0);
});
