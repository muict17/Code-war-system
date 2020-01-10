import deleteUserService from "../../../services/users/delete";
import schema from "./schema";

export default {
  url: "/users/:userId",
  method: "DELETE",
  schema,
  preHandler: async (req: any, res: any) => {
    req.userInfo = await req.authorization.authenticate(req.headers);
    const isTokenValid = req.userInfo.isValid;
    const isRoleValid = req.authorization.verifyRole(req.userInfo, ["admin"]);

    if (isTokenValid && isRoleValid) {
      return;
    }

    if (!isTokenValid) {
      res.status(401).send({ message: "Unauthorization" });
      return;
    }

    if (!isRoleValid) {
      res.status(403).send({ message: "Insufficient Permission" });
      return;
    }
  },
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
