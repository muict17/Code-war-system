import createQuestionService from "../../services/questions/create";

test("create new question", async () => {
  const result = await createQuestionService({
    name: "test",
    description: "w",
    score: 1
  });
  expect(result[0].name).toEqual("test");
  expect(result[0].description).toEqual("w");
});
