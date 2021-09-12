import { Request, Response, NextFunction } from "express";

const colors = {
  magenta: "\x1b[35m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  default: "\x1b[36m",
};

const getColor = (method: string): string => {
  if (method === "POST") return colors.magenta;
  else if (method === "GET") return colors.green;
  else if (method === "PUT") return colors.yellow;
  else if (method === "DELETE") return colors.red;
  else return colors.default;
};

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "test") return next();

  const { method, url } = req;

  const color = getColor(method);
  const resetColor = "\x1b[0m";
  const methodStr = `${color}${method.padEnd(8)}${resetColor}`;

  console.log(`${methodStr}${url}`);

  return next();
};
