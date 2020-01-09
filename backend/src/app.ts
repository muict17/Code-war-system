import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import routes from "./routes";

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: { prettyPrint: true } });
export default () => {
  routes.forEach((route: any) => {
    server.route(route);
  });
  return server;
};
