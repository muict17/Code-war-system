const format = require("pg-format");
import {
  baseSelectSql,
  baseInsertSql,
  baseDeleteSql,
  baseUpdateSql,
  baseSelectJoinSql
} from "./sql";
import { AnswerData, QueryString } from "../../interfaces/inputData/answer";
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

  public getById(answerId: number) {
    const sql = `${baseSelectSql} WHERE answer_id = %s`;
    this.sql = format(sql, answerId);
    return this;
  }

  public updateById(answerId: number, answerData: AnswerData) {
    const { answer, isAnswer } = answerData;
    const sql = `${baseUpdateSql} WHERE answer_id = %s RETURNING *`;
    this.sql = format(sql, answer, isAnswer, new Date(), answerId);
    return this;
  }

  public getByQuery(query: QueryString) {
    const { limit, offset, questionName } = query;
    let sql = `
    ${baseSelectJoinSql},
    questions.question_id AS questions_question_id,
    questions.name AS questions_name,
    questions.description AS questions_description,
    questions.score AS questions_score,
    questions.create_at AS questions_create_at,
    questions.update_at AS questions_update_at
      FROM answers
      INNER JOIN questions
        ON questions.question_id = answers.question_id`;
    if (questionName) {
      sql = `${sql} WHERE questions.name LIKE %L LIMIT %s OFFSET %s`;
      console.log(sql);
      this.sql = format(sql, questionName, limit, offset);
      return this;
    }
    sql = ` ${sql} LIMIT %s OFFSET %s`;
    this.sql = format(sql, limit, offset);
    return this;
  }
}
