import createQuestionService from "../../services/questions/create";
import getQuestionByIdService from "../../services/questions/get-id";
test("get question by id", async () => {
  const createdResult = await createQuestionService({
    name: "test",
    description: "w",
    score: 1
  });
  const result = await getQuestionByIdService(createdResult.questionId);
  expect(result).not.toEqual(null);
});
