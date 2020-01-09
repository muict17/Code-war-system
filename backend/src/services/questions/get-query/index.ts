import QuestionModel from "../../../models/questions";
import { QueryString } from "../../../interfaces/inputData/question";

export default async (query: QueryString) => {
  const model = new QuestionModel();
  const exec = await model.getByQuery(query).execute();
  return exec.getResult();
};
