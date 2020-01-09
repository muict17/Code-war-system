import createAnswerService from "../../services/answers/create";

test("create new answer", async () => {
  const createdResult = await createAnswerService(1, {
    answer: "test",
    isAnswer: true
  });
  expect(createdResult.answer).toEqual("test");
});

test("create multiples answers", async () => {
  const createdResult = await createAnswerService(1, [
    {
      answer: "test1",
      isAnswer: true
    },
    {
      answer: "test2",
      isAnswer: true
    },
    {
      answer: "test3",
      isAnswer: true
    }
  ]);
  expect(createdResult.length).toEqual(3);
  expect(createdResult[0].answer).toEqual("test1");
});
