import schema from "./schema";
import deleteCategoryService from "../../../services/competition-categories/delete";
import preHandler from "../../../global-hooks/verify-roles";

export default {
  url: "/competition-categories/:categoryId",
  method: "DELETE",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      await deleteCategoryService(req.params.categoryId);
      req.logger.info(
        `Competition Category: delete id ${req.params.categoryId}`
      );
      res.status(200).send({ message: "deleted" });
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
