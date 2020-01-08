import createCompetitionService from "../../services/competitions/create";

test("create new category", async () => {
  const createdResult = await createCompetitionService({
    categoryId: 1,
    name: "test competition",
    description: "test description",
    startDate: new Date(),
    endDate: new Date()
  });
  expect(createdResult.name).toEqual("test competition");
});
