import QuestionModel from "../../../models/questions";
// import { QuestionInfo } from "../../../interfaces/model/question-info";
import { QuestionData } from "../../../interfaces/inputData/question";

export default async (question: QuestionData) => {
  const model = new QuestionModel();
  const exec = await model.insertOne(question).execute();
  return exec.getResult();
};
