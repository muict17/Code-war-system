import QuestionModel from "../../../models/questions";
import { QuestionData } from "../../../interfaces/inputData/question";

export default async (questionId: number, question: QuestionData) => {
  const model = new QuestionModel();
  const exec = await model.updateById(questionId, question).execute();

  const isUpdated = exec.isAffectedRows();
  const result = exec.getPrettyResult();
  if (isUpdated) {
    return result[0];
  }

  throw new Error("question id not found");
};
