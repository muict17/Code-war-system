import schema from "./schema";
import getUserByIdService from "../../../services/users/get-id";

export default {
  url: "/users/:userId",
  method: "GET",
  schema,
  preHandler: async (req: any, res: any, done: any) => {
    await req.authorization.authenticate(req, res);
    const isOwner = req.authorization.verifyOwner(
      req.userInfo,
      req.params.userId
    );

    const isRole = req.authorization.verifyRole(req.userInfo, ["admin"]);
    if (isOwner || isRole) {
      done();
      return;
    }
    res.status(403).send({ message: "Insufficient Permission" });
  },

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
