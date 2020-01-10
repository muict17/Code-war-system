export default {
  body: {
    type: "object",
    properties: {
      username: {
        type: "string"
      },
      password: {
        type: "string"
      },
      studentId: {
        type: "number"
      }
    },
    required: ["username", "password", "studentId"]
  }
};
