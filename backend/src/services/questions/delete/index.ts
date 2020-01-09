import QuestionModel from "../../../models/question";
export default async (questionId: number) => {
  const model = new QuestionModel();
  const exec = await model.deleteById(questionId).execute();

  if (exec.isAffectedRows()) {
    return {
      rowCount: exec.getRowCount()
    };
  }

  throw new Error("question id not found");
};
