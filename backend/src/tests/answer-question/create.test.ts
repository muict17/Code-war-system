import db from "../../db";
import createAnswerQuestionService from "../../services/question-responses/create";

test("test by id", async () => {
  const connection = await db.connect();
  await connection.query("DELETE FROM question_response WHERE answerer_id = 1");
  connection.release(true);
  const result = await createAnswerQuestionService({
    userId: 1,
    questionId: 1,
    competitionId: 1,
    answer: "test",
    fileUrl: "test"
  });
  expect(result.score).toBeGreaterThanOrEqual(0);
  expect(result.isCorrect).toEqual(true);
});
