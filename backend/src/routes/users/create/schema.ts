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
