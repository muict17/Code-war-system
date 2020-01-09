import mapToCamelCase from "../../../utils/transform/to-camel";
import renameKey from "../../../utils/transform/rename-key-pattern";
import { CompetitionInfo } from "../../../interfaces/model/competitions-info";

export default (data: any): CompetitionInfo => {
  const categoryInfo = mapToCamelCase(renameKey(data, "competition_category_"));
  const competitionInfo = mapToCamelCase(renameKey(data, "competitions_"));
  return {
    categoryInfo,
    ...competitionInfo
  };
};
