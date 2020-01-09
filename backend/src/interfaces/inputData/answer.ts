export interface AnswerData {
  answer: string;
  isAnswer: boolean;
}

export interface QueryString {
  limit: number;
  offset: number;
  questionName?: string;
}
