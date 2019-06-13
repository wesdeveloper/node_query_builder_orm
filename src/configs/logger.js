/* eslint-disable no-console */
const colors = require("colors");

function notJson(test) {
  return test !== Object(test) || test instanceof Error;
}

function log(fn, color, ...args) {
  fn(color(...args.map(x => (notJson(x) ? x : JSON.stringify(x)))));
}

const logger = {
  trace: (...args) => log(console.log, colors.gray, "TRACE", ...args),
  debug: (...args) => log(console.log, colors.cyan, "DEBUG", ...args),
  info: (...args) => log(console.log, colors.green, "INFO", ...args),
  warn: (...args) => log(console.error, colors.yellow, "WARN", ...args),
  error: (...args) => log(console.error, colors.red, "ERROR", ...args),
  fatal: (...args) => log(console.error, colors.magenta, "FATAL", ...args)
};

module.exports = logger;
