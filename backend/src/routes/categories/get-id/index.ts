import schema from "./schema";
import getCategoryByIdService from "../../../services/competition-categories/get-id";
import preHandler from "../../../global-hooks/verify-token";

export default {
  url: "/competition-categories/:categoryId",
  method: "GET",
  schema,
  preHandler,
  handler: async (req: any, res: any) => {
    try {
      const result = await getCategoryByIdService(req.params.categoryId);
      res.status(200).send(result);
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
