import createCategoryService from "../../../services/competition-categories/create";
import schema from "./schema";
import preHandler from "../../../global-hooks/verify-admin";

export default {
  url: "/competition-categories",
  method: "POST",
  schema,
  preHandler,
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
