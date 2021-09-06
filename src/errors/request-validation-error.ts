import { ValidationError } from "express-validator";
import { BaseError } from "./base-error";

export class RequestValidationError extends BaseError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super("Invalid request params");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map((e) => ({ message: e.msg, field: e.param }));
  }
}
