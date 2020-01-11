import createCategoryService from "../../../services/competition-categories/create";
import schema from "./schema";

export default {
  url: "/competition-categories",
  method: "POST",
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
      const { name, description } = req.body;
      const categoryInfo = await createCategoryService({ name, description });
      req.logger.info(`Competition Category: create new category = ${name}`);
      res.status(200).send(categoryInfo);
    } catch (e) {
      req.logger.error(e);
      res.status(500).send({ message: "Service Unavailable" });
    }
  }
};
