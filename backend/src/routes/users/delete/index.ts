import deleteUserService from "../../../services/users/delete";
import schema from "./schema";
import preHandler from "../../../global-hooks/verify-roles";

export default {
  url: "/users/:userId",
  method: "DELETE",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      await deleteUserService(req.params.userId);
      res.status(200).send({ message: "deleted" });
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
