import schema from "./schema";
import updateCategoryService from "../../../services/competition-categories/update";
import preHandler from "../../../global-hooks/verify-roles";
export default {
  url: "/competition-categories/:categoryId",
  method: "PATCH",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      const { name, description } = req.body;
      const categoryInfo = await updateCategoryService(req.params.categoryId, {
        name,
        description
      });
      req.logger.info(
        `Competition Category: updated id ${req.params.categoryId}`
      );
      res.status(200).send({ message: "updated", ...categoryInfo });
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse(
        "CompetitionCategory",
        e.message
      );
      res.status(code).send({ message });
    }
  }
};
