const format = require("pg-format");
import {
  baseInsertSql,
  baseUpdateSql,
  baseDeleteSql,
  baseSelectJoinSql
} from "./sql";
import { QueryString, QuestionData } from "../../interfaces/inputData/question";
import { QuestionInfo } from "../../interfaces/model/question-info";
import BaseDataBase from "../base-database-model";

export default class QuestionModel extends BaseDataBase<QuestionInfo> {
  public insertOne(questionData: QuestionData) {
    const { name, description, score } = questionData;
    this.sql = format(
      `${baseInsertSql} VALUES (%L,%L,%L) RETURNING *`,
      name,
      description,
      score
    );
    return this;
  }

  public getById(questionId: number) {
    const sql = `
    ${baseSelectJoinSql},
    answers.answer_id  AS answers_answer_id ,
    answers.question_id  AS answers_question_id,
    answers.answer  AS answers_answer,
    answers.is_answer  AS answers_is_answer,
    answers.create_at  AS answers_create_at,
    answers.update_at  AS answers_update_at
    FROM questions
    LEFT JOIN answers ON questions.question_id = answers.question_id
    WHERE questions.question_id = %s`;
    this.sql = format(sql, Number(questionId));
    return this;
  }

  public getByQuery(query: QueryString) {
    let sql = `
    ${baseSelectJoinSql},
    answers.answer_id  AS answers_answer_id ,
    answers.question_id  AS answers_question_id,
    answers.answer  AS answers_answer,
    answers.is_answer  AS answers_is_answer,
    answers.create_at  AS answers_create_at,
    answers.update_at  AS answers_update_at
    FROM questions
    INNER JOIN answers ON questions.question_id = answers.question_id `;
    if (query.name) {
      sql = `${sql} WHERE questions.name LIKE %L LIMIT %s OFFSET %s`;
      this.sql = format(
        sql,
        query.name,
        Number(query.limit),
        Number(query.offset)
      );
      return this;
    }
    sql = `${sql} LIMIT %s OFFSET %s`;
    this.sql = format(sql, Number(query.limit), Number(query.offset));
    return this;
  }

  public updateById(id: number, question: QuestionData) {
    const sql = `${baseUpdateSql} WHERE question_id = %s RETURNING *`;
    this.sql = format(
      sql,
      question.name,
      question.description,
      Number(question.score),
      new Date(),
      id
    );
    return this;
  }

  public deleteById(questionId: number) {
    const sql = `${baseDeleteSql} WHERE question_id = %s`;
    this.sql = format(sql, questionId);
    return this;
  }
}
