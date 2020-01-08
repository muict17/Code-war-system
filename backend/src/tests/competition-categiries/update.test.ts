import categoryCreateService from "../../services/competition-categories/create";
import categoryUpdateService from "../../services/competition-categories/update";

test("update category by id", async () => {
  const createdResult = await categoryCreateService({
    name: "test category",
    description: "test description"
  });
  const updatedResult = await categoryUpdateService(createdResult.categoryId, {
    name: "new ",
    description: "new description"
  });
  expect(updatedResult.updateAt).not.toEqual(createdResult.updateAt);
  expect(updatedResult.name).not.toEqual(createdResult.name);
});
