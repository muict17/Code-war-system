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
      categoryId: {
        type: "number"
      },
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      startDate: {
        type: "string",
        format: "date-time"
      },
      endDate: {
        type: "string",
        format: "date-time"
      }
    },
    required: ["categoryId", "name", "description", "startDate", "endDate"]
  }
};
