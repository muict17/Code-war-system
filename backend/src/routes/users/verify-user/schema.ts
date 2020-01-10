export default {
  body: {
    type: "object",
    properties: {
      token: {
        type: "string"
      }
    },
    required: ["token"]
  }
};
