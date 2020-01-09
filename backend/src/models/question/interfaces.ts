export interface QueryString {
  limit: number;
  offset: number;
  name?: string;
}

export interface QuestionData {
  name: string;
  description: string;
  score: number;
}
