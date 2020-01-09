export interface QuestionData {
  name: string;
  description: string;
  score: number;
}

export interface QueryString {
  limit: number;
  offset: number;
  name?: string;
  isJoin?: boolean;
}
