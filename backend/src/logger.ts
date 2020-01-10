import * as pino from "pino";

export default pino({
  useLevelLabels: true,
  prettyPrint: {
    colorize: true,
    levelFirst: true
  },
  base: {}
});
