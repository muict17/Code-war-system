const format = require("pg-format");
import db from "../../db";
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
}
