import db from "../../../db";
import { AnswerQuestionData } from "../../../interfaces/inputData/question-response";
import storedFunctionToArray from "../../../utils/transform/stored-function-to-array";

const answerQuestionSql = `SELECT answer_question($1,$2,$3,$4,$5)`;

export default async ({
  userId,
  questionId,
  answer,
  competitionId,
  fileUrl
}: AnswerQuestionData) => {
  const result = await db.query(answerQuestionSql, [
    userId,
    questionId,
    answer,
    competitionId,
    fileUrl
  ]);
  const transformToArray = storedFunctionToArray(
    result.rows[0].answer_question
  );
  return {
    score: Number(transformToArray[0]),
    isCorrect: transformToArray[1] === "t"
  };
};
