import QuestionModel from "../../../models/questions";

export default async (questionId: number) => {
  const model = new QuestionModel();
  const exec = await model.getById(questionId).execute();
  const result = exec.getPrettyResult()[0];
  const isFounded = exec.isFoundRows();
  if (isFounded) {
    return result;
  }

  throw new Error("question id not found");
};
