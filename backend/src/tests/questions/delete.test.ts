import deleteQuestionService from "../../services/questions/delete";
import createQuestionService from "../../services/questions/create";

test("delete question by id", async () => {
  const createdResult = await createQuestionService({
    name: "test",
    description: "w",
    score: 1
  });
  const result = await deleteQuestionService(createdResult.questionId);
  expect(result.rowCount).toEqual(1);
});
