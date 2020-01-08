import categoryCreateService from "../../services/competition-categories/create";
import categoryDeleteService from "../../services/competition-categories/delete";

test("delete a category", async () => {
  const createdResult = await categoryCreateService({
    name: "test category",
    description: "test description"
  });
  const deleteResult = await categoryDeleteService(createdResult.categoryId);
  expect(deleteResult.rowCount).toEqual(1);
});
