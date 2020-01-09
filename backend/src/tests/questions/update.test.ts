import createQuestionService from "../../services/questions/create";
import updateQuestionService from "../../services/questions/update";

test("update exists question by id", async () => {
  const createdResult = await createQuestionService({
    name: "test",
    description: "w",
    score: 1
  });

  const result = await updateQuestionService(createdResult.questionId, {
    name: "new Test",
    description: "waaaa",
    score: 100
  });
  expect(result.name).toEqual("new Test");
  expect(result.description).toEqual("waaaa");
  expect(result.score).toEqual(100);
});
