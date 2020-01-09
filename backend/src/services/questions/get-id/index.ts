import QuestionModel from "../../../models/question";

export default async (questionId: number) => {
  const model = new QuestionModel();
  const exec = await model.getById(questionId).execute();
  console.log(exec.getPrettyResult());
  const result = exec.getPrettyResult();
  const isFounded = exec.isFoundRows();
  if (isFounded) {
    return result;
  }

  throw new Error("question id not found");
};
