import loginService from "../../services/authentication/login";

describe("login ", () => {
  test("test with correct username and password", async () => {
    const { jwt } = await loginService({
      username: "test",
      password: "test"
    });
    expect(jwt).not.toEqual(null);
  });

  test("test with incorrect username", async () => {
    try {
      await loginService({ username: "student2", password: "test" });
    } catch (e) {
      expect(e.message).toEqual("username not found");
    }
  });

  test("test with correct username and incorrect password", async () => {
    try {
      await loginService({ username: "test", password: "wrongPassword" });
    } catch (e) {
      expect(e.message).toEqual("password incorrect");
    }
  });
});
