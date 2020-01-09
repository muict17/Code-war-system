import getAnswerByQueryService from "../../services/answers/get-query";

test("list all without join", async () => {
  const result = await getAnswerByQueryService({
    limit: 10,
    offset: 0,
    isJoin: false
  });
  expect(result.length).toBeLessThanOrEqual(10);
});

test("list all without join", async () => {
  const result = await getAnswerByQueryService({
    limit: 10,
    offset: 0,
    isJoin: true
  });
  console.log(result);
  expect(result.length).toBeLessThanOrEqual(10);
});
