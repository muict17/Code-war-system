import categoryCreateService from "../../services/competition-categories/create";

test("create new category", async () => {
  const createdResult = await categoryCreateService({
    name: "test category",
    description: "test description"
  });
  expect(createdResult.name).toEqual("test category");
  expect(createdResult.description).toEqual("test description");
});
