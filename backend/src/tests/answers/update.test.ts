import createAnswerService from "../../services/answers/create";
import updateAnswerService from "../../services/answers/update";

test("update answer", async () => {
  const createdResult = await createAnswerService(1, {
    answer: "test",
    isAnswer: true
  });
  const updatedResult = await updateAnswerService(createdResult.answerId, {
    answer: "new Answer",
    isAnswer: false
  });
  expect(updatedResult.answer).toEqual("new Answer");
  expect(updatedResult.isAnswer).toEqual(false);
});
