import createAnswerService from "../../services/answers/create";
import getAnswerByIdService from "../../services/answers/get-id";

test("get answer by id", async () => {
  const createdResult = await createAnswerService(1, {
    answer: "test",
    isAnswer: true
  });
  const result = await getAnswerByIdService(createdResult.answerId);
  expect(result).not.toBeNull();
});
