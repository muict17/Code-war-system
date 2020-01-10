import jwt from "../../jwt";

export default async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const checkToken: any = await jwt.verify(token);
    if (checkToken.isValid) {
      req.userInfo = checkToken.payload;
      return true;
    }
  }
  return false;
};
