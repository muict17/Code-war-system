import mapToCamelCase from "../../../utils/transform/to-camel";
import renameKey from "../../../utils/transform/rename-key-pattern";

export default data => {
  const categoryInfo = mapToCamelCase(renameKey(data, "competition_category_"));
  const competitionInfo = mapToCamelCase(renameKey(data, "competitions_"));
  return {
    categoryInfo,
    ...competitionInfo
  };
};
