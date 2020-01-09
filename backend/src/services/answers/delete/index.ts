import AnswerModel from "../../../models/answer";

export default async (answerId: number) => {
  const model = new AnswerModel();
  const exec = await model.deleteById(answerId).execute();
  const rowCount = exec.getRowCount();

  const isDeleted = exec.isAffectedRows();
  if (isDeleted) {
    return {
      rowCount
    };
  }

  throw new Error("answer id not found");
};
