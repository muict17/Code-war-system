import schema from "./schema";
import getUserByIdService from "../../../services/users/get-id";
import preHandler from "../../../global-hooks/verify-admin-or-owner";

export default {
  url: "/users/:userId",
  method: "GET",
  schema,
  preHandler,
  handler: async (req: any, res: any) => {
    try {
      const result = await getUserByIdService(req.params.userId);
      res.status(200).send(result);
      return;
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
