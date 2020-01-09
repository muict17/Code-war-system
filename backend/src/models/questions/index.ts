const format = require("pg-format");
import {
  baseInsertSql,
  baseSelectSql,
  baseUpdateSql,
  baseDeleteSql
} from "./sql";
import { QueryString, QuestionData } from "../../interfaces/inputData/question";
import { QuestionInfo } from "../../interfaces/model/question-info";
import BaseDataBase from "../base-database-model";

import db from "../../db";
import mapToCamel from "../../utils/transform/to-camel";

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
    const sql = `${baseSelectSql} WHERE question_id = %s`;
    this.sql = format(sql, Number(questionId));
    return this;
  }

  public getByQuery(query: QueryString) {
    if (query.name) {
      const sql = `${baseSelectSql} WHERE name LIKE %L LIMIT %s OFFSET %s`;
      this.sql = format(
        sql,
        query.name,
        Number(query.limit),
        Number(query.offset)
      );
      return this;
    }
    const sql = `${baseSelectSql} LIMIT %s OFFSET %s`;
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

  public async execute() {
    const connection = await db.connect();
    const questionInfo = await connection.query(this.sql);
    this.result = questionInfo.rows.map(mapToCamel);
    this.rowCount = questionInfo.rowCount;
    return this;
  }
}
