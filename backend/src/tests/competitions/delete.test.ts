import createCompetitionService from "../../services/competitions/create";
import deleteCompetitionService from "../../services/competitions/delete";

test("create new category", async () => {
  const createdResult = await createCompetitionService({
    categoryId: 1,
    name: "test competition",
    description: "test description",
    startDate: new Date(),
    endDate: new Date()
  });

  const deletedResult = await deleteCompetitionService(
    createdResult.competitionId
  );
  expect(deletedResult.rowCount).toBeGreaterThan(0);
});
