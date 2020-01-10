import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import routes from "./routes";
import logger from "./logger";

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();
// { logger: { prettyPrint: true } }
export default () => {
  server.decorateRequest("logger", logger);
  routes.forEach((route: any) => {
    server.route(route);
  });
  return server;
};
