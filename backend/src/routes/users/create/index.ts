import createUserService from "../../../services/users/create";
import schema from "./schema";
import sendVerifyEmailService from "../../../services/mailers/send-user-token";

export default {
  url: "/users",
  method: "POST",
  schema,
  handler: async (req: any, res: any) => {
    try {
      const { username, password, studentId } = req.body;
      const userData = { roleId: 1, username, password, studentId };
      const result = await createUserService(userData);
      await sendVerifyEmailService(result.username, result.verifyToken);
      req.logger.info(
        `registration: email = ${result.username}, studentId = ${result.studentId}`
      );
      res.status(200).send(result);
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
