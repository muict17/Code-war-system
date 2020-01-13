import schema from "./schema";
import createCompetitionService from "../../../services/competitions/create";
import preHandler from "../../../global-hooks/verify-roles";

export default {
  url: "/competitions",
  method: "POST",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      const result = await createCompetitionService(req.body);
      req.logger.info(
        `Create new Competitions: Create name = ${req.body.name}`
      );
      res.status(200).send(result);
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse(
        "Comepetition",
        e.message
      );

      res.status(code).send({ message });
    }
  }
};
