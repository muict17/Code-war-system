import schema from "./schema";
import deleteCompetitionService from "../../../services/competitions/delete";
import preHandler from "../../../global-hooks/verify-roles";

export default {
  url: "/competitions/:competitionId",
  method: "DELETE",
  schema,
  preHandler: preHandler(["admin"]),
  handler: async (req: any, res: any) => {
    try {
      await deleteCompetitionService(req.params.competitionId);
      res.status(200).send({ message: "deteled" });
    } catch (e) {
      const { code, message } = req.createErrorResponse(
        "Competition",
        e.message
      );
      res.status(code).send({ message });
    }
  }
};
