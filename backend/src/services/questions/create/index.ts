import QuestionModel from "../../../models/question";
import { QuestionData } from "../../../interfaces/inputData/question";

export default async (question: QuestionData) => {
  const model = new QuestionModel();
  const exec = await model.insertOne(question).execute();
  return exec.getPrettyResult()[0];
};
