import categoryCreateService from "../../services/competition-categories/create";
import categoryGetByIdService from "../../services/competition-categories/get-id";

test("get category by id", async () => {
  const createdResult = await categoryCreateService({
    name: "test",
    description: "test description"
  });
  const result = await categoryGetByIdService(createdResult.categoryId);
  expect(result.name).toEqual("test");
});
