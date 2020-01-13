import schema from "./schema";
import preHandler from "../../../global-hooks/verify-roles";
import updateCompetitionService from "../../../services/competitions/update";

export default {
  url: "/competitions/:competitionId",
  method: "PATCH",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      const result = await updateCompetitionService(req.params.id, req.body);
      res.status(200).send({ message: "updated", ...result });
    } catch (e) {
      const { code, message } = req.createErrorResponse(
        "Competition",
        e.message
      );
      res.status(code).send({ message });
    }
  }
};
