import schema from "./schema";
import loginService from "../../../services/authentication/login";

export default {
  url: "/login",
  method: "POST",
  schema,
  handler: async (req: any, res: any) => {
    try {
      const { username, password } = req.body;
      const loginInfo = await loginService({ username, password });
      req.logger.info(`Login: email = ${username}`);
      res.status(200).send(loginInfo);
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse(
        "Authentication",
        e.message
      );
      res.status(code).send({ message });
    }
  }
};
