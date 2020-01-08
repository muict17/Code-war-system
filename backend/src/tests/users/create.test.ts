import createUserService from "../../services/users/create";
import usernameGenerator from "../../utils/generator/code-pattern";

describe("create user", () => {
  test("create new user", async () => {
    const randomUser = usernameGenerator("userxxxx");
    const randomStudentNumer = String(Math.floor(Math.random() * 100));
    const result = await createUserService({
      roleId: 1,
      username: randomUser,
      password: "test",
      studentId: randomStudentNumer
    });
    expect(result.username).toEqual(randomUser);
    expect(result.studentId).toEqual(Number(randomStudentNumer));
  });
  test("create new user with an exists username", async () => {
    const result = await createUserService({
      roleId: 1,
      username: "test",
      password: "test",
      studentId: "123"
    });
    expect(result).toEqual(null);
  });
});
