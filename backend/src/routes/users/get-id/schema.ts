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
      userId: {
        type: "number"
      }
    },
    required: ["userId"]
  },
  response: {
    200: {
      type: "object",
      properties: {
        userId: {
          type: "number"
        },
        studentId: {
          type: "number"
        },
        username: {
          type: "string"
        },
        isVerified: {
          type: "boolean"
        },
        score: {
          type: "number"
        },
        createAt: {
          type: "string"
        },
        updateAt: {
          type: "string"
        }
      }
    }
  }
};
