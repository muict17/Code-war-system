import getByQueryService from "../../../services/users/get-query";
import schema from "./schema";
import preHandler from "../../../global-hooks/verify-token";

export default {
  url: "/users",
  method: "GET",
  schema,
  preHandler,
  handler: async (req: any, res: any) => {
    try {
      const result = await getByQueryService(req.query);
      res.status(200).send({ list: result });
    } catch (e) {
      const { code, message } = req.createErrorResponse("User", e.message);
      res.status(code).send({ message });
    }
  }
};
