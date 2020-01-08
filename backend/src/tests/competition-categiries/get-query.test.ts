import categoryByQueryService from "../../services/competition-categories/get-query";

describe("competition category", () => {
  test("list all competition categories", async () => {
    const result = await categoryByQueryService({ limit: 10, offset: 0 });
    expect(result.length).toBeGreaterThan(0);
  });

  test("list competition categories by name", async () => {
    const result = await categoryByQueryService({
      limit: 10,
      offset: 0,
      name: "te"
    });
    expect(result.length).toBeGreaterThan(0);
  });
});
