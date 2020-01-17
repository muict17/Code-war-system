const format = require("pg-format");
import {
  baseInsertSql,
  baseUpdateSql,
  baseDeleteSql,
  baseSelectJoinSql,
  baseSelectSql
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

  public getByIdWithoutJoin(questionId: number) {
    const sql = `${baseSelectSql} WHERE question_id = $s`;
    this.sql = format(sql, Number(questionId));
    return this;
  }
  public getByQueryWithoutJoin(query: QueryString) {
    const { name, limit, offset } = query;
    if (query.name) {
      const sql = `${baseSelectSql} WHERE name LIKE %L`;
      this.sql = format(sql, name);
      return this;
    }

    const sql = `${baseSelectSql} LIMIT %s OFFSET %s`;
    this.sql = format(sql, Number(limit), Number(offset));
    return this;
  }
  public getByQuery(query: QueryString) {
    const { name, limit, offset, questionId } = query;
    let sql = `
    ${baseSelectJoinSql},
    answers.answer_id  AS answers_answer_id ,
    answers.question_id  AS answers_question_id,
    answers.answer  AS answers_answer,
    answers.is_answer  AS answers_is_answer,
    answers.create_at  AS answers_create_at,
    answers.update_at  AS answers_update_at
    FROM (SELECT * FROM questions LIMIT %s OFFSET %s) AS questions
    LEFT JOIN answers ON questions.question_id = answers.question_id `;
    if (name) {
      sql = `${sql} WHERE questions.name LIKE %L`;
      this.sql = format(sql, Number(limit), Number(offset), name);
      return this;
    }

    if (questionId) {
      sql = `${sql} WHERE questions.question_id = %s`;
      this.sql = format(sql, Number(questionId));
      return this;
    }

    this.sql = format(sql, Number(limit), Number(offset));
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
