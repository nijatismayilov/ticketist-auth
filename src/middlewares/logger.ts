import { Request, Response, NextFunction } from "express";

const logger = (req: Request, _res: Response, next: NextFunction) => {
  const { method, url } = req;

  console.log(`${method}: ${url}`);

  return next();
};

export default logger;
