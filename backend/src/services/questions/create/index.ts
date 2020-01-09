import db from "../../../db";
import createdSql from "../../../models/questions/insert/insert-one";
import { QuestionInfo } from "../../../interfaces/model/question-info";
import { QuestionData } from "./interfaces";

export default async (question: QuestionData): Promise<QuestionInfo> => {
  const transformToArray: any = Object.values(question);
  const sqlQuery = createdSql(transformToArray);
  const connection = await db.connect();
  const result = await connection.query(sqlQuery);
  return result.rows[0];
};
