import AnswerModel from "../../../models/answer";

export default async (answerId: number) => {
  const model = new AnswerModel();
  const exec = await model.getById(answerId).execute();

  if (exec.isFoundRows()) {
    return exec.getPrettyResult();
  }

  throw new Error("answer id not found");
};
