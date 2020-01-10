import getByQueryService from "../../../services/users/get-query";
import schema from "./schema";

export default {
  url: "/users",
  method: "GET",
  schema,
  preHandler: async (req: any, res: any, done: Function) => {
    const isValidToken = await req.authorization.authenticate(req, res);
    if (isValidToken) {
      done();
      return;
    }

    res.status(401).send({ message: "Unauthorization" });
  },
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
