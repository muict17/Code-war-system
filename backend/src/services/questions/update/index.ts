import QuestionModel from "../../../models/question";
import { QuestionData } from "../../../interfaces/inputData/question";

export default async (questionId: number, question: QuestionData) => {
  const model = new QuestionModel();
  const exec = await model.updateById(questionId, question).execute();

  if (exec.isAffectedRows()) {
    return exec.getPrettyResult()[0];
  }

  throw new Error("question id not found");
};
