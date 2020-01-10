import jwt from "../../jwt";

export default async (headers: any) => {
  if (
    headers.authorization &&
    headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = headers.authorization.split(" ")[1];
    const checkToken: any = await jwt.verify(token);
    if (checkToken.isValid) {
      return { isValid: true, ...checkToken.payload };
    }
  }
  return { isValid: false };
};
