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
  querystring: {
    type: "object",
    properties: {
      limit: {
        type: "number",
        default: 10
      },
      offset: {
        type: "number",
        default: 0
      },
      name: {
        type: "string"
      }
    },
    required: ["limit", "offset", "name"]
  }
};
