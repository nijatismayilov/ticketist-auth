import { Request, Response, NextFunction } from "express";

import { BaseError } from "../errors/base-error";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  res.status(400).send({ errors: [{ message: "Something went wrong" }] });
};
