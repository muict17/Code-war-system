import QuestionModel from "../../../models/question";
import { QueryString } from "../../../interfaces/inputData/question";
import util from "../../../utils/transform";
export default async (query: QueryString) => {
  const model = new QuestionModel();

  if (query.isJoin) {
    const exec = await model.getByQuery(query).execute();
    const getResult: any = exec.getResult();
    const uniqueQuestions = util.getUnique(getResult, "questions_question_id");
    return uniqueQuestions.map((question: any) => {
      const listAnswer = getResult
        .filter(
          (answer: any) =>
            answer.questions_question_id === question.questions_question_id
        )
        .map((answer: any) =>
          util.mapToCamel(util.renameKey(answer, "answers_"))
        );
      return {
        questionInfo: util.mapToCamel(util.renameKey(question, "questions_")),
        listAnswer: listAnswer
      };
    });
  }

  const exec = await model.getByQueryWithoutJoin(query).execute();
  return exec.getPrettyResult();
};
