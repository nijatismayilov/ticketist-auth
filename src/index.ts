import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { signInRouter } from "./routes/sign-in";
import { signOutRouter } from "./routes/sign-out";
import { signUpRouter } from "./routes/sign-up";
import { currentUserRouter } from "./routes/current-user";
import errorHandler from "./middlewares/error-handler";
import logger from "./middlewares/logger";
import { NotFoundError } from "./errors/not-found-error";

const app = express();

app.use(json());
app.use(logger);

app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(currentUserRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
