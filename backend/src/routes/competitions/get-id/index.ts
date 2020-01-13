import schema from "./schema";
import preHandler from "../../../global-hooks/verify-token";
import getCompetitionByIdService from "../../../services/competitions/get-id";

export default {
  url: "/competitions/:competitionId",
  method: "GET",
  schema,
  preHandler,
  handler: async (req: any, res: any) => {
    try {
      const result = await getCompetitionByIdService(req.params.competitionId);
      res.status(200).send(result);
    } catch (e) {
      req.logger.error(e);
      const { code, message } = req.createErrorResponse(
        "Competition",
        e.message
      );

      res.status(code).send({ message });
    }
  }
};
