import getUserByIdService from "../../services/users/get-id";
import usernameGenerator from "../../utils/generator/code-pattern";
import createUserService from "../../services/users/create";

test("get user by id", async () => {
  const randomUser = usernameGenerator("userxxxx");
  const randomStudentNumer = String(Math.floor(Math.random() * 100));
  const createdResult = await createUserService({
    roleId: 1,
    username: randomUser,
    password: "test",
    studentId: randomStudentNumer
  });
  const result = await getUserByIdService(createdResult.userId);
  expect(result.username).toEqual(randomUser);
  expect(result.userId).toBeGreaterThan(0);
  expect(result.roleId).toEqual(1);
  expect(result.score).toEqual(0);
});
