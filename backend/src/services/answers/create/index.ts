import AnswerModel from "../../../models/answer";
import { AnswerData } from "../../../interfaces/inputData/answer";
export default async (
  questionId: number,
  answerData: AnswerData | AnswerData[]
): Promise<any> => {
  const model = new AnswerModel();
  if (Array.isArray(answerData)) {
    const exec = await model.insertMany(questionId, answerData).execute();
    return exec.getResult();
  }
  const exec = await model.insertOne(questionId, answerData).execute();
  return exec.getResult()[0];
};
