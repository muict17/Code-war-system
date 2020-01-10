import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import * as helmet from "fastify-helmet";
import * as compress from "fastify-compress";
import * as cors from "fastify-cors";
import * as staticFile from "fastify-static";
import * as path from "path";
import multer from "fastify-multer";
import routes from "./routes";
import logger from "./logger";
import verifyOwner from "./utils/authorization";
import createErrorResponse from "./utils/helpers/create-error-message";

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();
export default () => {
  server.register(staticFile, {
    root: path.join(__dirname, "../files"),
    prefix: "/public/",
    decorateReply: false
  });
  server.register(multer.contentParser);
  server.register(helmet, { hidePoweredBy: { setTo: "PHP 4.2.0" } });
  server.register(compress, { global: false });
  server.register(cors);
  server.decorateRequest("createErrorResponse", createErrorResponse);
  server.decorateRequest("logger", logger);
  server.decorateRequest("authorization", verifyOwner);
  routes.forEach((route: any) => {
    server.route(route);
  });
  return server;
};
