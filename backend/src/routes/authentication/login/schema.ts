export default {
  body: {
    type: "object",
    properties: {
      username: {
        type: "string",
        format: "email"
      },
      password: {
        type: "string"
      }
    },
    required: ["username", "password"]
  }
};
