export default {
  headers: {
    type: "object",
    properties: {
      authorization: {
        type: "string"
      }
    },
    required: ["authorization"]
  },
  body: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      }
    },
    required: ["name", "description"]
  }
};
