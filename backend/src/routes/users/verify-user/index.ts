import verifyUserService from "../../../services/users/verify-user";
import schema from "./schema";
export default {
  url: "/users/verify",
  method: "PATCH",
  schema,
  handler: async (req: any, res: any) => {
    try {
      await verifyUserService(req.body.token);
      res.status(200).send({ message: "verified" });
    } catch (e) {
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
