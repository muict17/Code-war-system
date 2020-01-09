import * as jwt from "jsonwebtoken";

require("dotenv").config();
export default {
  sign: (payload: Object): Promise<string> =>
    new Promise((resolve, reject) => {
      jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, payload },
        process.env.JWT_SECRET,
        (err, token) => {
          if (err) reject(err);
          resolve(token);
        }
      );
    }),
  verify: async (authorization: string) => {
    try {
      if (authorization) {
        const token = authorization.replace("Bearer ", "");
        await jwt.verify(token, process.env.JWT_SECRET);
        const userInfo: Object = jwt.decode(token);
        return { isValid: true, ...userInfo };
      }
    } catch (e) {
      return { isValid: false };
    }
  },
  decode: (token: string): any => jwt.decode(token)
};
