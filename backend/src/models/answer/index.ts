const format = require("pg-format");
import {
  baseSelectSql,
  baseInsertSql,
  baseDeleteSql,
  baseUpdateSql
} from "./sql";
import { AnswerData } from "../../interfaces/inputData/answer";
import { AnswerInfo } from "../../interfaces/model/answer-info";
import BaseDatabase from "../base-database-model";
export default class AnswerModel extends BaseDatabase<AnswerInfo> {
  public insertOne(questionId: number, answerData: AnswerData) {
    const { answer, isAnswer } = answerData;
    this.sql = format(
      `${baseInsertSql} VALUES (%L,%L,%L) RETURNING *`,
      questionId,
      answer,
      isAnswer
    );
    return this;
  }

  public insertMany(questionId: number, answerData: AnswerData[]) {
    const dataQuery = answerData
      .map(value => ({
        questionId: questionId,
        ...value
      }))
      .map(Object.values);
    this.sql = format(`${baseInsertSql} VALUES %L RETURNING *`, dataQuery);
    return this;
  }

  public deleteById(answerId: number) {
    const sql = `${baseDeleteSql} WHERE answer_id = %s`;
    this.sql = format(sql, answerId);
    return this;
  }
}
