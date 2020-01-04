import schema from "./schema";
import createRoleService from "../../../services/user-roles/create";

export default {
  url: "/roles",
  method: "POST",
  schema,
  handler: async (req, res) => {
    const result = await createRoleService(req.body.name);
    res.send(result);
  }
};
