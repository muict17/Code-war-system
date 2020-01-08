export interface UserInfo {
  message?: string;
  userId: number;
  roleId: number;
  classId: number;
  tokenAuth: string;
  studentId: string;
  username: string;
  password: string;
  isVerified: boolean;
  score: number;
  createAt: Date;
  updateAt: Date;
}
