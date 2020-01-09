import db from "../db";
import mapToCamel from "../utils/transform/to-camel";

export default class BaseDataBase<T> {
  result: T[];
  sql: string;
  rowCount: number;
  db: any;
  constructor() {
    this.db = db;
  }

  public async execute() {
    const connection = await this.db.connect();
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