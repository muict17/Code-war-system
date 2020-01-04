import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: { prettyPrint: true } });
export default () => {
  server.get("/ping", (request, reply) => {
    console.log(reply.res);
    reply.code(200).send({ pong: "it worked!" });
  });
  return server;
};
