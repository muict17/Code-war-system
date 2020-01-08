import { CompetitionCategoryInfo } from "./competition-category-info";

export interface CompetitionInfo {
  categoryInfo: CompetitionCategoryInfo;
  competitionId: number;
  categoryId: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createAt: Date;
  updateAt: Date;
}
