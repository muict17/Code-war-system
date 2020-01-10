import { UserInfo } from "../../interfaces/model/jwt-info";

export default ({ userId }: UserInfo, ownerKey: string) => {
  if (userId === ownerKey) {
    return true;
  }
  return false;
};
