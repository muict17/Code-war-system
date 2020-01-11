export interface LoginData {
  username: string;
  password: string;
}

export interface LoginInfo {
  user_id: string;
  token_auth: string;
  password: string;
}
export interface Response {
  jwt: string | undefined;
  role: string | undefined;
}
