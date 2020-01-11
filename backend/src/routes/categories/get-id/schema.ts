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
  params: {
    type: "object",
    properties: {
      categoryId: {
        type: "number"
      }
    },
    required: ["categoryId"]
  }
};
