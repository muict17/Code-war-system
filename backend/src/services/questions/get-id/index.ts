import QuestionModel from "../../../models/question";
import renameKey from "../../../utils/transform/rename-key-pattern";
export default async (questionId: number) => {
  const model = new QuestionModel();
  const exec = await model.getById(questionId).execute();
  const result = exec.getResult();
  if (exec.isFoundRows()) {
    const questionInfo = renameKey(result[0], "questions_");
    const answerInfo = result.map(el => renameKey(el, "answers_"));
    return {
      questionInfo,
      listQuestion: answerInfo
    };
  }

  throw new Error("question id not found");
};
