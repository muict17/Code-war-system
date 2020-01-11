import schema from "./schema";
import deleteCategoryService from "../../../services/competition-categories/delete";

export default {
  url: "/competition-categories/:categoryId",
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
      await deleteCategoryService(req.params.categoryId);
      req.logger.info(
        `Competition Category: delete id ${req.params.categoryId}`
      );
      res.status(200).send({ message: "deleted" });
    } catch (e) {
      req.logger.error(e);
      res.status(500).send({ message: "Service Unavailable" });
    }
  }
};
