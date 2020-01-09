import AnswerModel from "../../../models/answer";
import { AnswerData } from "../../../interfaces/inputData/answer";

export default async (answerId: number, answerData: AnswerData) => {
  const model = new AnswerModel();
  const exec = await model.updateById(answerId, answerData).execute();
  if (exec.isAffectedRows()) {
    return exec.getPrettyResult()[0];
  }
  throw new Error("answer id not found");
};
