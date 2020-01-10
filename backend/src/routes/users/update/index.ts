import schema from "./schema";
import updateUserService from "../../../services/users/update";

export default {
  url: "/users",
  method: "PATCH",
  schema,
  preHandler: async (req: any, res: any, done: any) => {
    const isValid = await req.authorization.authenticate(req, res);
    if (isValid) {
      done();
      return;
    }
    res.status(403).send({ message: "Insufficient Permission" });
  },
  handler: async (req: any, res: any) => {
    try {
      const userData = {
        userId: req.userInfo.userId,
        tokenAuth: req.userInfo.tokenAuth,
        username: req.body.username,
        password: req.body.password
      };
      await updateUserService(userData);
      res.status(200).send({ message: "updated" });
    } catch (e) {
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
