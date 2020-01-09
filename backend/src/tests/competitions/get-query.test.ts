import getCompetitionByQueryService from "../../services/competitions/get-query";

test("get competition with pagination", async () => {
  const result = await getCompetitionByQueryService({ limit: 10, offset: 0 });
  expect(result.length).toBeGreaterThan(0);
});
