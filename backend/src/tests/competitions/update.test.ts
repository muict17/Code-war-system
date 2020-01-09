import createCompetitionService from "../../services/competitions/create";
import updateCompetitionService from "../../services/competitions/update";

test("update category by id", async () => {
  const createdResult = await createCompetitionService({
    categoryId: 1,
    name: "test competition",
    description: "test description",
    startDate: new Date(),
    endDate: new Date()
  });
  const updatedResult = await updateCompetitionService(
    createdResult.competitionId,
    {
      name: "new Competition",
      description: "new Description",
      startDate: new Date(),
      endDate: new Date()
    }
  );

  expect(updatedResult.name).toEqual("new Competition");
  expect(updatedResult.updateAt).not.toEqual(createdResult.updateAt);
});
