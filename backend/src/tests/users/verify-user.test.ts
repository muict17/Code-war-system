import createUserService from "../../services/users/create";
import usernameGenerator from "../../utils/generator/code-pattern";
import verifyUserService from "../../services/users/verify-token";

test("create new user", async () => {
  const randomUser = usernameGenerator("userxxxx");
  const randomStudentNumer = String(Math.floor(Math.random() * 1000000));
  const result = await createUserService({
    roleId: 1,
    username: randomUser,
    password: "test",
    studentId: randomStudentNumer
  });
  const verifyResult = await verifyUserService(result.verifyToken);
  expect(verifyResult).toEqual(true);
});
