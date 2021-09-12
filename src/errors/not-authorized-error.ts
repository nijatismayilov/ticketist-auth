import { BaseError } from "./base-error";

export class NotAuthorizedError extends BaseError {
  statusCode = 401;

  constructor() {
    super("You are not authorized");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeError() {
    return [{ message: "You are not authorized" }];
  }
}
