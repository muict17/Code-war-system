const format = require("pg-format");
import {
  baseInsertSql,
  baseSelectSql,
  baseUpdateSql,
  baseDeleteSql
} from "./sql";
import { QueryString, QuestionData } from "../../interfaces/inputData/question";
import { QuestionInfo } from "../../interfaces/model/question-info";

import db from "../../db";
import mapToCamel from "../../utils/transform/to-camel";

export default class QuestionModel {
  result: QuestionInfo[];
  sql: string;
  rowCount: number;
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
    const sql = `${baseUpdateSql} WHERE question_id = %s`;
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

  public isAffectedRows(): boolean {
    return this.rowCount !== 0;
  }

  public isFoundRows(): boolean {
    return this.result.length !== 0;
  }

  public getRowCount() {
    return this.rowCount;
  }

  public getResult() {
    return this.result;
  }
}
