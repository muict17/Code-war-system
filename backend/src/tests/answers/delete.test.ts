import createAnswerService from "../../services/answers/create";
import deleteAnswerService from "../../services/answers/delete";

test("delete answer by id", async () => {
  const createdResult = await createAnswerService(1, {
    answer: "test",
    isAnswer: true
  });
  const deletedResult = await deleteAnswerService(createdResult.answerId);
  expect(deletedResult).not.toBeNull();
});
