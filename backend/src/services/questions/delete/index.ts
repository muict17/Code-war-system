import QuestionModel from "../../../models/question";
export default async (questionId: number) => {
  const model = new QuestionModel();
  const exec = await model.deleteById(questionId).execute();
  const isDeleted = exec.isAffectedRows();
  const rowCount = exec.getRowCount();

  if (isDeleted) {
    return {
      rowCount
    };
  }

  throw new Error("question id not found");
};
