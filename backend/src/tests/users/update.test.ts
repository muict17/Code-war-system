import updateUserService from "../../services/users/update";
import createUserService from "../../services/users/create";
import usernameGenerator from "../../utils/generator/code-pattern";

test("update user with correct user id", async () => {
  const randomUser = usernameGenerator("userxxxx");
  const randomNewUser = usernameGenerator("userxxxx");
  const randomStudentNumer = String(Math.floor(Math.random() * 1000000));
  const createdResult = await createUserService({
    roleId: 1,
    username: randomUser,
    password: "test",
    studentId: randomStudentNumer
  });
  const updatedResult = await updateUserService({
    userId: String(createdResult.userId),
    password: "test",
    username: randomNewUser
  });
  expect(updatedResult.username).toEqual(randomNewUser);
  expect(updatedResult.updateAt).not.toEqual(createdResult.updateAt);
});
