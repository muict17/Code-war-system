import AnswerModel from "../../../models/answer";

import { QueryString } from "../../../interfaces/inputData/answer";
import util from "../../../utils/transform";
export default async (query: QueryString) => {
  const model = new AnswerModel();

  if (query.isJoin) {
    const exec = await model.getByQuery(query).execute();
    const getResult: any = exec.getResult();
    return getResult.map((result: any) => {
      return {
        questionInfo: util.mapToCamel(util.renameKey(result, "questions_")),
        answerInfo: util.mapToCamel(util.renameKey(result, "answers_"))
      };
    });
  }

  const exec = await model.getByQueryWithoutJoin(query).execute();
  return exec.getPrettyResult();
};
