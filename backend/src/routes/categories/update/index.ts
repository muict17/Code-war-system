import schema from "./schema";
import updateCategoryService from "../../../services/competition-categories/update";

export default {
  url: "/competition-categories/:categoryId",
  method: "PATCH",
  schema
};
