export interface LoginInfo {
  username: string;
  password: string;
}

export interface Response {
  message: string;
  httpCode: number;
  jwt: string | undefined;
}
