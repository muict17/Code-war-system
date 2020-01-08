import createCompetitionService from "../../services/competitions/create";
import getCompetitionByIdService from "../../services/competitions/get-id";

test("get category by id", async () => {
  const createdResult = await createCompetitionService({
    categoryId: 1,
    name: "test competition",
    description: "test description",
    startDate: new Date(),
    endDate: new Date()
  });
  const result = await getCompetitionByIdService(createdResult.competitionId);
  expect(result.categoryInfo).not.toEqual(null);
  expect(result.name).toEqual("test competition");
});
