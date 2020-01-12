import schema from "./schema";
import preHandler from "../../../global-hooks/verify-token";
import getCategoryByQueryService from "../../../services/competition-categories/get-query";

export default {
  url: "/competition-categories",
  method: "GET",
  schema,
  preHandler,
  handler: async (req: any, res: any) => {
    try {
      const listQuery = await getCategoryByQueryService(req.query);
      res.status(200).send({ list: listQuery });
    } catch (e) {
      req.logger.error(e);
      res.status(500).send({ message: "Service Unavailable" });
    }
  }
};
