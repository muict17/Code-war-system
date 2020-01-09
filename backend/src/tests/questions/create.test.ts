import createQuestionService from "../../services/questions/create";

test("create new question", async () => {
  const result = await createQuestionService({
    name: "test",
    description: "w",
    score: 1
  });
  expect(result.name).toEqual("test");
  expect(result.description).toEqual("w");
});
